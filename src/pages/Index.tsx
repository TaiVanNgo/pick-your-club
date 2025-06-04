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

const Index = () => {
  const [selectedClubs, setSelectedClubs] = useState<Club[]>([]);
  const [activeClubIndex, setActiveClubIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [openSettings, setOpenSettings] = useState(false);
  const [filteredClubs, setFilteredClubs] = useState<Club[]>(gameClubs);

  // Default filter settings
  const [filterSettings, setFilterSettings] = useState<FilterSettings>({
    minStar: 3,
    maxStar: 5,
    selectedLeagues: Array.from(new Set(gameClubs.map((club) => club.league))),
    numClubs: 1,
    enableNationalTeams: false,
    nationalTeamsCount: 1,
  });

  // Get active club based on index
  const activeClub = selectedClubs[activeClubIndex] || null;

  // Get unique leagues for filter options
  const availableLeagues = Array.from(
    new Set(gameClubs.map((club) => club.league)),
  ).sort();

  // Apply filters when settings change
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

  const pickRandomClubs = () => {
    if (filteredClubs.length === 0) {
      // Handle case when no clubs match filters
      return;
    }

    setIsShuffling(true);
    setSelectedClubs([]);
    setActiveClubIndex(0);
    setShowAnimation(true);

    const randomClubs: Club[] = [];

    // Split clubs into regular clubs and national teams
    const regularClubs = filteredClubs.filter(
      (club) => club.league !== "National Team",
    );
    const nationalTeams = filteredClubs.filter(
      (club) => club.league === "National Team",
    );

    // Get random regular clubs
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

    // Get random national teams if enabled
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

  // Navigate between selected clubs
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

  // Get the button label based on selection settings
  const getButtonLabel = () => {
    let label = "";

    // Regular clubs count
    if (filterSettings.numClubs > 0) {
      label += `${filterSettings.numClubs} Club${filterSettings.numClubs > 1 ? "s" : ""}`;
    }

    // National teams count if enabled
    if (
      filterSettings.enableNationalTeams &&
      filterSettings.nationalTeamsCount > 0
    ) {
      if (label) label += " + ";
      label += `${filterSettings.nationalTeamsCount} National Team${filterSettings.nationalTeamsCount > 1 ? "s" : ""}`;
    }

    return `Random ${label}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center">
            <Trophy className="mr-4 h-12 w-12 text-yellow-400" />
            <h1 className="text-6xl font-bold text-white">Pick Your Club</h1>
            <Trophy className="ml-4 h-12 w-12 text-yellow-400" />
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-green-100">
            Let fate decide your next PES2021 adventure! Discover new teams,
            challenge yourself with different play styles, and experience
            football from around the world.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={pickRandomClubs}
              disabled={isShuffling || filteredClubs.length === 0}
              size="lg"
              className="transform rounded-full bg-gradient-to-r from-blue-600 to-green-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Shuffle
                className={`mr-3 h-6 w-6 ${isShuffling ? "animate-spin" : ""}`}
              />
              {isShuffling ? "Drawing Clubs..." : getButtonLabel()}
            </Button>

            <Button
              onClick={() => setOpenSettings(true)}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <SettingsIcon className="h-5 w-5 text-white" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>

          {filteredClubs.length === 0 && (
            <p className="mt-4 text-red-300">
              No clubs match your filters. Please adjust your settings.
            </p>
          )}

          {filteredClubs.length > 0 &&
            filteredClubs.length < gameClubs.length && (
              <p className="mt-4 text-sm text-green-300">
                Filtered: {filteredClubs.length} of {gameClubs.length} teams
              </p>
            )}
        </div>

        {/* Multi-card display with navigation */}
        <div className="mb-8">
          {selectedClubs.length > 1 && !isShuffling && (
            <div className="mb-4 flex items-center justify-center space-x-2">
              <Button
                onClick={showPrevClub}
                disabled={activeClubIndex === 0}
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                aria-label="Previous club"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="ml-1">Prev</span>
              </Button>
              <span className="px-4 font-medium text-white">
                {activeClubIndex + 1} of {selectedClubs.length}
              </span>
              <Button
                onClick={showNextClub}
                disabled={activeClubIndex === selectedClubs.length - 1}
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                aria-label="Next club"
              >
                <span className="mr-1">Next</span>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Card Shuffle Animation */}
        <div className="mb-16 flex justify-center">
          {isShuffling || selectedClubs.length > 0 ? (
            <CardShuffle
              key="club-display"
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
            <div className="flex space-x-2">
              {selectedClubs.map((club, index) => (
                <button
                  key={`indicator-${club.name}`}
                  onClick={() => setActiveClubIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === activeClubIndex
                      ? "scale-125 bg-blue-500"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`View ${club.name}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
            <span className="font-semibold text-white">
              {gameClubs.length} teams available from {availableLeagues.length}{" "}
              leagues worldwide
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
