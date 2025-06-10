import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Shuffle,
  Settings as SettingsIcon,
  ChevronLeft,
  ChevronRight,
  Trophy,
} from "lucide-react";
import gameClubs, { Club } from "@/data/gameClubs";
import CardShuffle from "@/components/CardShuffle";
import CardSkeleton from "@/components/CardSkeleton";
import SettingsDialog, { FilterSettings } from "@/components/SettingsDialog";

// ===================================================================
//  HELPER FUNCTION: Fetches club details from the API
// ===================================================================
async function getClubDetails(clubName: string, apiKey: string | undefined) {
  if (!apiKey || apiKey === "YOUR_API_FOOTBALL_KEY") {
    console.error(
      "API Key is missing. Make sure you have created a .env.local file and restarted your server.",
    );
    return;
  }

  const url = new URL("https://v3.football.api-sports.io/teams");
  url.searchParams.append("search", clubName);

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": apiKey,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `API Error: ${response.statusText} (Status: ${response.status})`,
      );
    }
    const data = await response.json();
    // console.log("datam ",);
    if (data.response && data.response.length > 0) {
      const teamData = data.response[0];
      const { team: teamInfo, venue: venueInfo } = teamData;

      // Logs the fetched details to the browser's developer console
      console.group(
        `%cAPI Details for: ${teamInfo.name}`,
        "color: #10b981; font-weight: bold; font-size: 14px;",
      );
      console.log("Team Info:", teamInfo);
      console.log("Venue Info:", venueInfo);
      console.groupEnd();

      return data.response[0].team.logo;
    } else {
      console.warn(`API: No details found for a club named '${clubName}'.`);
    }
  } catch (error: any) {
    console.error("An error occurred during the API call:", error.message);
  }
}

// ===================================================================
//  MAIN REACT COMPONENT
// ===================================================================
const Index = () => {
  const [selectedClubs, setSelectedClubs] = useState<Club[]>([]);
  const [activeClubIndex, setActiveClubIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [_showAnimation, setShowAnimation] = useState(true);
  const [openSettings, setOpenSettings] = useState(false);
  const [filteredClubs, setFilteredClubs] = useState<Club[]>(gameClubs);
  const [clubImage, setClubImage] = useState("");
  const [filterSettings, setFilterSettings] = useState<FilterSettings>({
    minStar: 3,
    maxStar: 5,
    selectedLeagues: Array.from(new Set(gameClubs.map((club) => club.league))),
    numClubs: 1,
    enableNationalTeams: false,
    nationalTeamsCount: 1,
  });

  const activeClub = selectedClubs[activeClubIndex] || null;
  const availableLeagues = Array.from(
    new Set(gameClubs.map((club) => club.league)),
  ).sort();

  // Apply local filters when settings change
  useEffect(() => {
    const newFilteredClubs = gameClubs.filter((club) => {
      const starRating = parseFloat(club.stars);
      return (
        starRating >= filterSettings.minStar &&
        starRating <= filterSettings.maxStar &&
        filterSettings.selectedLeagues.includes(club.league)
      );
    });

    setFilteredClubs(newFilteredClubs);
  }, [filterSettings]);

  // ===============================================================
  //  MODIFICATION: This useEffect fetches data for the active club
  // ===============================================================
  useEffect(() => {
    if (activeClub && activeClub.name) {
      const apiKey = "ad1de23ce3a8c2ff7416f93ef2581411";

      getClubDetails(activeClub.name, apiKey).then((image) => {
        if (image) {
          setClubImage(image);
        }
      });
    }
  }, [activeClub]);

  const pickRandomClubs = () => {
    if (filteredClubs.length === 0) return;

    setIsShuffling(true);
    setSelectedClubs([]);
    setActiveClubIndex(0);
    setShowAnimation(true);

    const randomClubs: Club[] = [];
    const regularClubs = filteredClubs.filter(
      (club) => club.league !== "National Team",
    );
    const nationalTeams = filteredClubs.filter(
      (club) => club.league === "National Team",
    );

    if (regularClubs.length > 0) {
      const numRegularToSelect = Math.min(
        filterSettings.numClubs,
        regularClubs.length,
      );
      const tempRegularClubs = [...regularClubs];

      for (let i = 0; i < numRegularToSelect; i++) {
        if (tempRegularClubs.length === 0) break;
        const randomIndex = Math.floor(Math.random() * tempRegularClubs.length);
        const randomClub = tempRegularClubs[randomIndex];
        tempRegularClubs.splice(randomIndex, 1);
        randomClubs.push(randomClub);
      }
    }

    if (filterSettings.enableNationalTeams && nationalTeams.length > 0) {
      const numNationalToSelect = Math.min(
        filterSettings.nationalTeamsCount,
        nationalTeams.length,
      );
      const tempNationalTeams = [...nationalTeams];

      for (let i = 0; i < numNationalToSelect; i++) {
        if (tempNationalTeams.length === 0) break;
        const randomIndex = Math.floor(
          Math.random() * tempNationalTeams.length,
        );
        const randomTeam = tempNationalTeams[randomIndex];
        tempNationalTeams.splice(randomIndex, 1);
        randomClubs.push(randomTeam);
      }
    }
    setSelectedClubs(randomClubs);
  };

  const handleShuffleComplete = () => {
    setIsShuffling(false);
    setShowAnimation(false);
  };

  const handleApplySettings = (settings: FilterSettings) => {
    setFilterSettings(settings);
  };

  const showNextClub = useCallback(() => {
    if (activeClubIndex < selectedClubs.length - 1) {
      setActiveClubIndex((prev) => prev + 1);
    }
  }, [activeClubIndex, selectedClubs.length]);

  const showPrevClub = useCallback(() => {
    if (activeClubIndex > 0) {
      setActiveClubIndex((prev) => prev - 1);
    }
  }, [activeClubIndex]);

  const getButtonLabel = () => {
    let label = "";

    if (filterSettings.numClubs > 0) {
      label += `${filterSettings.numClubs} Club${
        filterSettings.numClubs > 1 ? "s" : ""
      }`;
    }

    if (
      filterSettings.enableNationalTeams &&
      filterSettings.nationalTeamsCount > 0
    ) {
      if (label) label += " + ";
      label += `${filterSettings.nationalTeamsCount} National Team${
        filterSettings.nationalTeamsCount > 1 ? "s" : ""
      }`;
    }

    return `Random ${label}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        {/* The rest of your JSX remains unchanged... */}
        <div className="mb-16 text-center">
          <div className="mb-8 flex flex-col items-center justify-center">
            <div className="mb-3 flex items-center">
              <Trophy className="mr-4 h-14 w-14 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
              <h1 className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-6xl font-extrabold text-transparent drop-shadow-sm">
                Pick Your Club
              </h1>
              <Trophy className="ml-4 h-14 w-14 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
            </div>
            <p className="text-xl font-semibold text-yellow-400">
              Soccer Game Team Selector
            </p>
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-green-100">
            Ready for a new challenge? Let the wheel of fortune choose your next
            football adventure! From legendary European giants to hidden gems
            across the globe — discover exciting teams and playstyles you might
            never have considered.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={pickRandomClubs}
              disabled={isShuffling || filteredClubs.length === 0}
              size="lg"
              className="transform rounded-full bg-gradient-to-r from-blue-600 to-green-600 px-10 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-green-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Shuffle
                className={`mr-3 h-7 w-7 ${
                  isShuffling ? "animate-spin" : "animate-pulse"
                }`}
              />
              {isShuffling ? "Spinning the Wheel..." : getButtonLabel()}
            </Button>

            <Button
              onClick={() => setOpenSettings(true)}
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-colors duration-300 hover:border-white/60 hover:bg-white/30"
            >
              <SettingsIcon className="h-6 w-6 text-white" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>

          {filteredClubs.length === 0 && (
            <div className="mt-4 animate-pulse rounded-lg bg-red-900/30 px-4 py-2 text-red-300 backdrop-blur-sm">
              <p className="font-semibold">
                No clubs match your current filters. Please adjust your
                settings.
              </p>
            </div>
          )}

          {filteredClubs.length > 0 &&
            filteredClubs.length < gameClubs.length && (
              <div className="mt-5 inline-flex items-center space-x-1 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-green-300 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
                <span>
                  {filteredClubs.length} of {gameClubs.length} teams available
                </span>
              </div>
            )}
        </div>

        {/* Multi-card display with navigation */}
        <div className="mb-8">
          {selectedClubs.length > 1 && !isShuffling && (
            <div className="mb-4 flex items-center justify-center space-x-3">
              <Button
                onClick={showPrevClub}
                disabled={activeClubIndex === 0}
                variant="outline"
                className="border-blue-500/30 bg-blue-900/20 px-5 text-white backdrop-blur-sm transition-all duration-200 hover:border-blue-400 hover:bg-blue-800/30 disabled:border-white/10 disabled:bg-white/5"
                aria-label="Previous club"
              >
                <ChevronLeft className="mr-1 h-5 w-5" />
                <span>Previous</span>
              </Button>
              <div className="flex h-9 min-w-20 items-center justify-center rounded-full bg-white/10 px-4 backdrop-blur-md">
                <span className="font-semibold text-white">
                  {activeClubIndex + 1} <span className="opacity-60">of</span>{" "}
                  {selectedClubs.length}
                </span>
              </div>
              <Button
                onClick={showNextClub}
                disabled={activeClubIndex === selectedClubs.length - 1}
                variant="outline"
                className="border-green-500/30 bg-green-900/20 px-5 text-white backdrop-blur-sm transition-all duration-200 hover:border-green-400 hover:bg-green-800/30 disabled:border-white/10 disabled:bg-white/5"
                aria-label="Next club"
              >
                <span>Next</span>
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Card Shuffle Animation */}
        <div className="mb-16 flex justify-center">
          {isShuffling || selectedClubs.length > 0 ? (
            <CardShuffle
              key="club-display"
              clubImage= {clubImage}
              clubs={filteredClubs}
              isShuffling={isShuffling}
              selectedClub={activeClub}
              onComplete={handleShuffleComplete}
            />
          ) : (
            <CardSkeleton />
          )}
        </div>

        {/* Multiple Selection Indicator */}
        {selectedClubs.length > 1 && !isShuffling && (
          <div className="mb-10 flex justify-center">
            <div className="flex flex-wrap justify-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-sm">
              {selectedClubs.map((club, index) => (
                <button
                  key={`indicator-${club.name}`}
                  onClick={() => setActiveClubIndex(index)}
                  className={`group relative flex h-4 w-4 items-center justify-center rounded-full transition-all ${
                    index === activeClubIndex
                      ? "bg-gradient-to-r from-blue-500 to-green-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`View ${club.name}`}
                >
                  {club.league === "National Team" && (
                    <span className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-black/75 px-1.5 py-0.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
                      {club.name}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-blue-900/40 to-green-900/40 px-8 py-4 backdrop-blur-md">
            <Trophy className="h-5 w-5 text-yellow-400" />
            <span className="font-semibold text-white">
              {gameClubs.length} teams • {availableLeagues.length} leagues •
              Endless possibilities
            </span>
          </div>
        </div>

        {/* Settings Dialog */}
        <SettingsDialog
          open={openSettings}
          onOpenChange={setOpenSettings}
          onApplySettings={handleApplySettings}
          availableLeagues={availableLeagues}
          currentSettings={filterSettings}
        />
      </div>
    </div>
  );
};

export default Index;
