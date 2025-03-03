import React from 'react';

interface ProgressBarProps {
  progress: number;
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, showPercentage = true }) => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {showPercentage && (
        <div className="text-xs text-gray-500 text-right">{progress}% complete</div>
      )}
    </div>
  );
};

export default ProgressBar;