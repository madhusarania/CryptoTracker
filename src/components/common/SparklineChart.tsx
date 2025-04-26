import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

interface SparklineChartProps {
  data: number[];
  color: string;
  height?: number;
  width?: number;
}

const SparklineChart: React.FC<SparklineChartProps> = ({ 
  data, 
  color, 
  height = 50, 
  width = 160 
}) => {
  const isPositive = data[0] <= data[data.length - 1];
  const lineColor = isPositive ? '#10B981' : '#EF4444';

  return (
    <div className="overflow-hidden" style={{ width, height }}>
      <Sparklines data={data} width={width} height={height} margin={5}>
        <SparklinesLine 
          color={lineColor} 
          style={{ 
            strokeWidth: 1.5,
            fill: 'none'
          }} 
        />
        <SparklinesSpots 
          size={2} 
          style={{ 
            fill: lineColor,
            strokeWidth: 0
          }} 
        />
      </Sparklines>
    </div>
  );
};

export default SparklineChart;