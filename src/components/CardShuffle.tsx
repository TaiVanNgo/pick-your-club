import React, { useEffect, useState } from "react";
import { Club } from "@/data/gameClubs";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CardShuffleProps {
  clubs: Club[];
  isShuffling: boolean;
  clubImage: string;
  selectedClub: Club | null;
  onComplete: () => void;
}

const CardShuffle: React.FC<CardShuffleProps> = ({
  clubs,
  isShuffling,
  clubImage,
  selectedClub,
  onComplete,
}) => {
  const [currentClub, setCurrentClub] = useState<Club | null>(null);
  const [shuffleInterval, setShuffleInterval] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [imageLoading, setImageLoading] = useState(false);

  // Render star rating display
  const renderStars = (stars: string) => {
    const starCount = parseFloat(stars);
    const fullStars = Math.floor(starCount);
    const hasHalfStar = starCount % 1 !== 0;

    return (
      <div className="flex items-center justify-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="h-4 w-4 text-yellow-400" />
            <div className="absolute left-0 top-0 h-4 w-2 overflow-hidden">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        <span className="ml-1 text-sm text-white/80">({stars})</span>
      </div>
    );
  };

  // Update current club when selected club changes (for navigation)
  useEffect(() => {
    if (!isShuffling && selectedClub) {
      setCurrentClub(selectedClub);
      setImageLoading(!clubImage);
    }
  }, [selectedClub, isShuffling, clubImage]);

  useEffect(() => {
    if (isShuffling) {
      // Start with a rapid shuffle
      let speed = 80; // milliseconds
      let duration = 0;
      const maxDuration = 2000; // Total animation time
      const finalSpeed = 300; // Slow down to this speed

      // Start shuffling
      const interval = setInterval(() => {
        // Get random club
        const randomIndex = Math.floor(Math.random() * clubs.length);
        setCurrentClub(clubs[randomIndex]);

        duration += speed;

        // Gradually slow down
        if (duration > maxDuration * 0.6) {
          speed = Math.min(finalSpeed, speed * 1.2);
        }

        // End shuffling
        if (duration >= maxDuration) {
          clearInterval(interval);
          setCurrentClub(selectedClub);
          setTimeout(onComplete, 500);
        }
      }, speed);

      setShuffleInterval(interval);

      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, [isShuffling, selectedClub, clubs, onComplete]);

  if (!currentClub) return null;

  return (
    <div
      className={`flex justify-center transition-all duration-300 ${
        isShuffling ? "animate-pulse" : ""
      }`}
    >
      <Card className="w-full max-w-lg transform border-white/30 bg-white/15 shadow-2xl backdrop-blur-md transition-all duration-300">
        <CardContent className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div
              className={`h-24 w-24 overflow-hidden rounded-full border-4 border-white/50 bg-white shadow-lg transition-all duration-300 ${
                isShuffling || !clubImage ? "animate-pulse" : ""
              }`}
            >
              {clubImage ? (
                <img
                  src={clubImage}
                  alt={currentClub.name}
                  className="h-full w-full object-contain p-2"
                  onLoad={() => setImageLoading(false)}
                  onError={(e) => {
                    setImageLoading(false);
                    e.currentTarget.src =
                      "https://via.placeholder.com/96x96/cccccc/666666?text=FC";
                  }}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200">
                  <span className="text-xs text-gray-500">
                    {currentClub.name.substring(0, 2)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <h2 className="mb-3 text-3xl font-bold text-white">
            {currentClub.name}
          </h2>

          <div className="space-y-3 text-green-100">
            <p className="text-lg font-semibold">{currentClub.league}</p>
            <div>{renderStars(currentClub.stars)}</div>
          </div>

          <div className="mt-6 border-t border-white/20 pt-4">
            <p className="text-sm text-white/80">
              {isShuffling
                ? "Choosing your destiny..."
                : "Your destiny awaits on the pitch! 🏆"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardShuffle;
