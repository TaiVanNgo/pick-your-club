import React from 'react';
import { Download } from 'lucide-react';

interface BatchFetchIndicatorProps {
  isFetching: boolean;
  completed: number;
  total: number;
}

const BatchFetchIndicator: React.FC<BatchFetchIndicatorProps> = ({
  isFetching,
  completed,
  total
}) => {
  if (!isFetching) return null;
  
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-blue-950/80 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm">
      <Download className={`h-4 w-4 ${completed < total ? 'animate-bounce' : ''} text-blue-300`} />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span>Loading team images</span>
          <span className="font-semibold">{completed}/{total}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300" 
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default BatchFetchIndicator;
