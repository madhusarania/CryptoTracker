import React from 'react';
import { InfoIcon as Info } from 'lucide-react';

interface InfoIconProps {
  tooltip: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ tooltip }) => {
  return (
    <div className="relative inline-block ml-1 group">
      <Info size={16} className="text-gray-400 dark:text-gray-500 cursor-help" />
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none">
        {tooltip}
      </div>
    </div>
  );
};

export default InfoIcon;