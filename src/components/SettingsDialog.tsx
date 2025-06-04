import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Settings, Star, Users, Flag } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApplySettings: (settings: FilterSettings) => void;
  availableLeagues: string[];
  currentSettings: FilterSettings;
}

export interface FilterSettings {
  minStar: number;
  maxStar: number;
  selectedLeagues: string[];
  numClubs: number;
  enableNationalTeams: boolean; // Whether to include national teams in selection
  nationalTeamsCount: number; // Number of national teams to select
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({
  open,
  onOpenChange,
  onApplySettings,
  availableLeagues,
  currentSettings,
}) => {
  const [minStar, setMinStar] = useState(currentSettings.minStar);
  const [maxStar, setMaxStar] = useState(currentSettings.maxStar);
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>(
    currentSettings.selectedLeagues,
  );
  const [numClubs, setNumClubs] = useState(currentSettings.numClubs || 1);
  const [enableNationalTeams, setEnableNationalTeams] = useState(
    currentSettings.enableNationalTeams || false,
  );
  const [nationalTeamsCount, setNationalTeamsCount] = useState(
    currentSettings.nationalTeamsCount || 1,
  );

  const handleApply = () => {
    onApplySettings({
      minStar,
      maxStar,
      selectedLeagues,
      numClubs,
      enableNationalTeams,
      nationalTeamsCount,
    });
    onOpenChange(false);
  };

  const toggleLeague = (league: string) => {
    setSelectedLeagues((prev) =>
      prev.includes(league)
        ? prev.filter((l) => l !== league)
        : [...prev, league],
    );
  };

  const handleSelectAll = () => {
    setSelectedLeagues(availableLeagues);
  };

  const handleClearAll = () => {
    setSelectedLeagues([]);
  };

  // Filter out national teams from leagues to display separately
  const regularLeagues = availableLeagues.filter(
    (league) => league !== "National Team",
  );
  const hasNationalTeams = availableLeagues.includes("National Team");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/30 bg-white/20 text-white backdrop-blur-lg sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-white">
            <Settings className="mr-2 h-5 w-5" />
            Filter Settings
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Number of Clubs Selector */}
          <div className="space-y-4">
            <h3 className="flex items-center font-semibold">
              <Users className="mr-2 h-4 w-4 text-blue-300" />
              Number of Clubs
            </h3>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Regular Clubs</span>
                <span className="text-sm font-bold">{numClubs}</span>
              </div>
              <Slider
                value={[numClubs]}
                min={1}
                max={6}
                step={1}
                onValueChange={(value) => setNumClubs(value[0])}
                className="[&>.relative>.absolute]:bg-gradient-to-r [&>.relative>.absolute]:from-blue-500 [&>.relative>.absolute]:to-green-500 [&>.relative]:bg-white/20"
              />
              <p className="mt-1 text-xs text-white/70">
                Select between 1-6 regular clubs
              </p>
            </div>

            {/* National Teams Selection */}
            {hasNationalTeams && (
              <div className="mt-4 space-y-3 border-t border-white/20 pt-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="enable-national-teams"
                    checked={enableNationalTeams}
                    onCheckedChange={(checked) =>
                      setEnableNationalTeams(!!checked)
                    }
                    className="border-white/30 bg-white/20 data-[state=checked]:bg-blue-500"
                  />
                  <label
                    htmlFor="enable-national-teams"
                    className="flex cursor-pointer items-center text-sm font-medium leading-none"
                  >
                    <Flag className="mr-2 h-4 w-4 text-yellow-300" />
                    Include National Teams
                  </label>
                </div>

                {enableNationalTeams && (
                  <div className="space-y-2 pl-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">National Teams</span>
                      <span className="text-sm font-bold">
                        {nationalTeamsCount}
                      </span>
                    </div>
                    <Slider
                      value={[nationalTeamsCount]}
                      min={1}
                      max={4}
                      step={1}
                      onValueChange={(value) => setNationalTeamsCount(value[0])}
                      className="[&>.relative>.absolute]:bg-gradient-to-r [&>.relative>.absolute]:from-blue-500 [&>.relative>.absolute]:to-green-500 [&>.relative]:bg-white/20"
                    />
                    <p className="mt-1 text-xs text-white/70">
                      Select {nationalTeamsCount} national team
                      {nationalTeamsCount > 1 ? "s" : ""}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Star Rating Filter */}
          <div className="space-y-4">
            <h3 className="flex items-center font-semibold">
              <Star className="mr-2 h-4 w-4 fill-yellow-400 text-yellow-400" />
              Star Rating
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Min Stars</span>
                  <span className="text-sm font-bold">{minStar}</span>
                </div>
                <Slider
                  value={[minStar]}
                  min={3}
                  max={5}
                  step={0.5}
                  onValueChange={(value) => {
                    const newMin = value[0];
                    setMinStar(newMin);
                    if (newMin > maxStar) setMaxStar(newMin);
                  }}
                  className="[&>.relative>.absolute]:bg-gradient-to-r [&>.relative>.absolute]:from-blue-500 [&>.relative>.absolute]:to-green-500 [&>.relative]:bg-white/20"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Max Stars</span>
                  <span className="text-sm font-bold">{maxStar}</span>
                </div>
                <Slider
                  value={[maxStar]}
                  min={3}
                  max={5}
                  step={0.5}
                  onValueChange={(value) => {
                    const newMax = value[0];
                    setMaxStar(newMax);
                    if (newMax < minStar) setMinStar(newMax);
                  }}
                  className="[&>.relative>.absolute]:bg-gradient-to-r [&>.relative>.absolute]:from-blue-500 [&>.relative>.absolute]:to-green-500 [&>.relative]:bg-white/20"
                />
              </div>
            </div>
          </div>

          {/* League Filter */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Club Leagues</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSelectAll}
                  className="h-7 border-white/30 bg-white/20 text-xs hover:bg-white/30"
                >
                  All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearAll}
                  className="h-7 border-white/30 bg-white/20 text-xs hover:bg-white/30"
                >
                  None
                </Button>
              </div>
            </div>

            <ScrollArea className="h-40">
              <div className="space-y-2">
                {regularLeagues.map((league) => (
                  <div key={league} className="flex items-center space-x-2">
                    <Checkbox
                      id={`league-${league}`}
                      checked={selectedLeagues.includes(league)}
                      onCheckedChange={() => toggleLeague(league)}
                      className="border-white/30 bg-white/20 data-[state=checked]:bg-blue-500"
                    />
                    <label
                      htmlFor={`league-${league}`}
                      className="cursor-pointer text-sm font-medium leading-none"
                    >
                      {league}
                    </label>
                  </div>
                ))}

                {/* National Teams as a separate item with special styling */}
                {hasNationalTeams && (
                  <div className="mt-3 flex items-center space-x-2 border-t border-white/20 pt-3">
                    <Checkbox
                      id="league-National-Team"
                      checked={selectedLeagues.includes("National Team")}
                      onCheckedChange={() => toggleLeague("National Team")}
                      className="border-white/30 bg-white/20 data-[state=checked]:bg-blue-500"
                    />
                    <label
                      htmlFor="league-National-Team"
                      className="flex cursor-pointer items-center text-sm font-medium leading-none"
                    >
                      <Flag className="mr-2 h-4 w-4 text-yellow-300" />
                      National Teams
                    </label>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>

        <DialogFooter>
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            onClick={handleApply}
          >
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
