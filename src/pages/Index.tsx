
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shuffle, Trophy } from 'lucide-react';

interface Club {
  name: string;
  league: string;
  country: string;
  colors: string[];
}

const clubs: Club[] = [
  { name: "Manchester United", league: "Premier League", country: "England", colors: ["#DC143C", "#000000"] },
  { name: "Manchester City", league: "Premier League", country: "England", colors: ["#6CABDD", "#1C2C5B"] },
  { name: "Liverpool", league: "Premier League", country: "England", colors: ["#C8102E", "#F6EB61"] },
  { name: "Chelsea", league: "Premier League", country: "England", colors: ["#034694", "#DBA111"] },
  { name: "Arsenal", league: "Premier League", country: "England", colors: ["#EF0107", "#063672"] },
  { name: "Tottenham", league: "Premier League", country: "England", colors: ["#132257", "#FFFFFF"] },
  { name: "Real Madrid", league: "La Liga", country: "Spain", colors: ["#FFFFFF", "#FFD700"] },
  { name: "Barcelona", league: "La Liga", country: "Spain", colors: ["#A50044", "#004D98"] },
  { name: "Atletico Madrid", league: "La Liga", country: "Spain", colors: ["#CE1126", "#FFFFFF"] },
  { name: "Sevilla", league: "La Liga", country: "Spain", colors: ["#FFFFFF", "#D4002A"] },
  { name: "Bayern Munich", league: "Bundesliga", country: "Germany", colors: ["#DC052D", "#0066B2"] },
  { name: "Borussia Dortmund", league: "Bundesliga", country: "Germany", colors: ["#FDE100", "#000000"] },
  { name: "RB Leipzig", league: "Bundesliga", country: "Germany", colors: ["#FFFFFF", "#DD0741"] },
  { name: "Juventus", league: "Serie A", country: "Italy", colors: ["#000000", "#FFFFFF"] },
  { name: "AC Milan", league: "Serie A", country: "Italy", colors: ["#FB090B", "#000000"] },
  { name: "Inter Milan", league: "Serie A", country: "Italy", colors: ["#0068A8", "#000000"] },
  { name: "Napoli", league: "Serie A", country: "Italy", colors: ["#3498DB", "#FFFFFF"] },
  { name: "AS Roma", league: "Serie A", country: "Italy", colors: ["#FFD700", "#8B0000"] },
  { name: "Paris Saint-Germain", league: "Ligue 1", country: "France", colors: ["#004170", "#DA020E"] },
  { name: "Olympique Marseille", league: "Ligue 1", country: "France", colors: ["#2FAEE0", "#FFFFFF"] },
  { name: "Ajax", league: "Eredivisie", country: "Netherlands", colors: ["#D2122E", "#FFFFFF"] },
  { name: "PSV Eindhoven", league: "Eredivisie", country: "Netherlands", colors: ["#ED1C24", "#FFFFFF"] },
  { name: "Benfica", league: "Primeira Liga", country: "Portugal", colors: ["#E20E0E", "#FFFFFF"] },
  { name: "FC Porto", league: "Primeira Liga", country: "Portugal", colors: ["#003DA5", "#FFFFFF"] },
  { name: "Celtic", league: "Scottish Premiership", country: "Scotland", colors: ["#009639", "#FFFFFF"] },
  { name: "Rangers", league: "Scottish Premiership", country: "Scotland", colors: ["#012169", "#FFFFFF"] },
  { name: "Galatasaray", league: "Super Lig", country: "Turkey", colors: ["#FFA500", "#8B0000"] },
  { name: "Fenerbahce", league: "Super Lig", country: "Turkey", colors: ["#003DA5", "#FFD700"] },
  { name: "Shakhtar Donetsk", league: "Ukrainian Premier League", country: "Ukraine", colors: ["#FF8C00", "#000000"] },
  { name: "Red Bull Salzburg", league: "Austrian Bundesliga", country: "Austria", colors: ["#DD0741", "#FFFFFF"] }
];

const Index = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const pickRandomClub = () => {
    setIsSpinning(true);
    setSelectedClub(null);
    
    // Simulate random selection with animation delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * clubs.length);
      setSelectedClub(clubs[randomIndex]);
      setIsSpinning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-blue-900">
      {/* Hero Section */}
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
            {isSpinning ? 'Picking Your Club...' : 'Pick Random Club'}
          </Button>
        </div>

        {/* Selected Club Display */}
        {isSpinning && (
          <div className="flex justify-center mb-16">
            <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-white/20 animate-pulse">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 animate-spin"></div>
                <div className="h-6 bg-white/20 rounded mb-3"></div>
                <div className="h-4 bg-white/20 rounded mb-2"></div>
                <div className="h-4 bg-white/20 rounded w-3/4 mx-auto"></div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedClub && !isSpinning && (
          <div className="flex justify-center mb-16 animate-in slide-in-from-bottom duration-500">
            <Card className="w-full max-w-md bg-white/15 backdrop-blur-md border-white/30 shadow-2xl transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div 
                    className="w-20 h-20 rounded-full shadow-lg border-4 border-white/50"
                    style={{
                      background: `linear-gradient(135deg, ${selectedClub.colors[0]}, ${selectedClub.colors[1] || selectedClub.colors[0]})`
                    }}
                  ></div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3">
                  {selectedClub.name}
                </h2>
                
                <div className="space-y-2 text-green-100">
                  <p className="text-lg font-semibold">
                    {selectedClub.league}
                  </p>
                  <p className="text-base opacity-90">
                    {selectedClub.country}
                  </p>
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
              {clubs.length} clubs available from top leagues worldwide
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
