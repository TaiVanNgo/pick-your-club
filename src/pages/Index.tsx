import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shuffle, Trophy, Settings as SettingsIcon } from "lucide-react";
import gameClubs, { Club } from "@/data/gameClubs";
import CardShuffle from "@/components/CardShuffle";
import CardSkeleton from "@/components/CardSkeleton";
import SettingsDialog, { FilterSettings } from "@/components/SettingsDialog";

const Index = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [openSettings, setOpenSettings] = useState(false);
  const [filteredClubs, setFilteredClubs] = useState<Club[]>(gameClubs);

  // Default filter settings
  const [filterSettings, setFilterSettings] = useState<FilterSettings>({
    minStar: 3,
    maxStar: 5,
    selectedLeagues: Array.from(new Set(gameClubs.map((club) => club.league))),
  });

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

  const pickRandomClub = () => {
    if (filteredClubs.length === 0) {
      // Handle case when no clubs match filters
      return;
    }

    setIsShuffling(true);
    setSelectedClub(null);
    setShowAnimation(true);

    // Select random club from filtered list
    const randomIndex = Math.floor(Math.random() * filteredClubs.length);
    const randomClub = filteredClubs[randomIndex];
    setSelectedClub(randomClub);
  };

  const handleShuffleComplete = () => {
    setIsShuffling(false);
    setShowAnimation(false);
  };

  const handleApplySettings = (settings: FilterSettings) => {
    setFilterSettings(settings);
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
              onClick={pickRandomClub}
              disabled={isShuffling || filteredClubs.length === 0}
              size="lg"
              className="transform rounded-full bg-gradient-to-r from-blue-600 to-green-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Shuffle
                className={`mr-3 h-6 w-6 ${isShuffling ? "animate-spin" : ""}`}
              />
              {isShuffling ? "Drawing a Club..." : "Random Club"}
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

        {/* Card Shuffle Animation */}
        <div className="mb-16 flex justify-center">
          {isShuffling || selectedClub ? (
            <CardShuffle
              clubs={filteredClubs}
              isShuffling={isShuffling}
              selectedClub={selectedClub}
              onComplete={handleShuffleComplete}
            />
          ) : (
            <CardSkeleton />
          )}
        </div>

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
