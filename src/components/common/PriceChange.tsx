import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from 'lucide-react';
import { formatPercentage } from '../../utils/formatters';

interface PriceChangeProps {
  value: number;
  className?: string;
}

const PriceChange: React.FC<PriceChangeProps> = ({ value, className = '' }) => {
  const color = value > 0 ? 'text-green-500' : value < 0 ? 'text-red-500' : 'text-gray-500';
  
  const Icon = value > 0 
    ? ArrowUpIcon 
    : value < 0 
      ? ArrowDownIcon 
      : MinusIcon;

  const displayValue = Math.abs(value);
  
  return (
    <div className={`flex items-center justify-end ${color} ${className}`}>
      <Icon size={14} className="mr-1" strokeWidth={2.5} />
      <span>{formatPercentage(displayValue)}</span>
    </div>
  );
};

export default PriceChange;