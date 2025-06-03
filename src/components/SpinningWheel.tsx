
import React, { useEffect, useState } from 'react';
import { Club } from '@/data/gameClubs';

interface SpinningWheelProps {
  clubs: Club[];
  isSpinning: boolean;
  selectedClub: Club | null;
  onComplete: () => void;
}

const SpinningWheel: React.FC<SpinningWheelProps> = ({ 
  clubs, 
  isSpinning, 
  selectedClub, 
  onComplete 
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isSpinning) {
      // Calculate final rotation based on selected club
      const clubIndex = selectedClub ? clubs.findIndex(club => club.name === selectedClub.name) : 0;
      const segmentAngle = 360 / clubs.length;
      const finalRotation = 360 * 3 + (360 - (clubIndex * segmentAngle + segmentAngle / 2)); // 3 full rotations plus position
      
      setRotation(finalRotation);
      
      // Call onComplete after animation
      setTimeout(() => {
        onComplete();
      }, 3000);
    }
  }, [isSpinning, selectedClub, clubs, onComplete]);

  const segmentAngle = 360 / clubs.length;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-yellow-400"></div>
        </div>
        
        {/* Spinning Wheel */}
        <div 
          className={`w-80 h-80 rounded-full border-8 border-yellow-400 relative overflow-hidden shadow-2xl ${
            isSpinning ? 'transition-transform duration-3000 ease-out' : ''
          }`}
          style={{
            transform: `rotate(${rotation}deg)`,
            background: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff, #5f27cd, #00d2d3, #ff9f43)'
          }}
        >
          {clubs.map((club, index) => {
            const startAngle = index * segmentAngle;
            const isVisible = index < 10; // Only show first 10 segments to avoid overcrowding
            
            if (!isVisible) return null;
            
            return (
              <div
                key={club.name}
                className="absolute w-full h-full flex items-center justify-center"
                style={{
                  transform: `rotate(${startAngle + segmentAngle / 2}deg)`,
                  transformOrigin: 'center',
                }}
              >
                <div 
                  className="text-white font-bold text-xs text-center px-2"
                  style={{
                    transform: 'translateY(-120px) rotate(-90deg)',
                    maxWidth: '100px',
                  }}
                >
                  {club.name.length > 15 ? club.name.substring(0, 15) + '...' : club.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {!isSpinning && (
        <p className="mt-4 text-white text-sm opacity-75 text-center">
          {clubs.length} clubs loaded • Ready to spin!
        </p>
      )}
    </div>
  );
};

export default SpinningWheel;
