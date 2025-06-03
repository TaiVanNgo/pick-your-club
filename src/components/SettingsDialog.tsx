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
import { Settings, Star } from "lucide-react";
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

  const handleApply = () => {
    onApplySettings({
      minStar,
      maxStar,
      selectedLeagues,
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
                  className="bg-white/30"
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
                  className="bg-white/30"
                />
              </div>
            </div>
          </div>

          {/* League Filter */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Leagues</h3>
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
                {availableLeagues.map((league) => (
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
