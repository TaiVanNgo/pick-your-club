
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shuffle, Trophy, Star } from 'lucide-react';
import gameClubs, { Club } from '@/data/gameClubs';
import SpinningWheel from '@/components/SpinningWheel';

const Index = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showWheel, setShowWheel] = useState(true);

  const pickRandomClub = () => {
    setIsSpinning(true);
    setSelectedClub(null);
    setShowWheel(true);
    
    // Select random club
    const randomIndex = Math.floor(Math.random() * gameClubs.length);
    const randomClub = gameClubs[randomIndex];
    setSelectedClub(randomClub);
  };

  const handleSpinComplete = () => {
    setIsSpinning(false);
    setShowWheel(false);
  };

  const renderStars = (stars: string) => {
    const starCount = parseFloat(stars);
    const fullStars = Math.floor(starCount);
    const hasHalfStar = starCount % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 absolute top-0 left-0 clip-path-half" />
          </div>
        )}
        <span className="text-sm text-white/80 ml-1">({stars})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Trophy className="w-12 h-12 text-yellow-400 mr-4" />
            <h1 className="text-6xl font-bold text-white">
              Pick Your Club
            </h1>
            <Trophy className="w-12 h-12 text-yellow-400 ml-4" />
          </div>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let fate decide your next PES2021 adventure! Discover new teams, challenge yourself with different play styles, and experience football from around the world.
          </p>
          
          <Button
            onClick={pickRandomClub}
            disabled={isSpinning}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Shuffle className={`w-6 h-6 mr-3 ${isSpinning ? 'animate-spin' : ''}`} />
            {isSpinning ? 'Spinning the Wheel...' : 'Spin the Wheel'}
          </Button>
        </div>

        {/* Spinning Wheel */}
        {showWheel && (
          <div className="flex justify-center mb-16">
            <SpinningWheel
              clubs={gameClubs}
              isSpinning={isSpinning}
              selectedClub={selectedClub}
              onComplete={handleSpinComplete}
            />
          </div>
        )}

        {/* Selected Club Display */}
        {selectedClub && !isSpinning && !showWheel && (
          <div className="flex justify-center mb-16 animate-in slide-in-from-bottom duration-500">
            <Card className="w-full max-w-lg bg-white/15 backdrop-blur-md border-white/30 shadow-2xl transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full shadow-lg border-4 border-white/50 overflow-hidden bg-white">
                    <img 
                      src={selectedClub.image} 
                      alt={selectedClub.name}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/96x96/cccccc/666666?text=FC';
                      }}
                    />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3">
                  {selectedClub.name}
                </h2>
                
                <div className="space-y-3 text-green-100">
                  <p className="text-lg font-semibold">
                    {selectedClub.league}
                  </p>
                  
                  <div className="flex justify-center">
                    {renderStars(selectedClub.stars)}
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    Your destiny awaits on the pitch! 🏆
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stats */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-white font-semibold">
              {gameClubs.length} clubs available from top leagues worldwide
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
