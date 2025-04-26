import React, { useEffect, useRef } from 'react';
import FavoriteButton from '../../components/common/FavoriteButton';
import PriceChange from '../../components/common/PriceChange';
import SparklineChart from '../../components/common/SparklineChart';
import { CryptoAsset } from '../../types/crypto';
import { formatPrice, formatLargeNumber, formatSupply } from '../../utils/formatters';

interface CryptoTableRowProps {
  asset: CryptoAsset;
  index: number;
}

const CryptoTableRow: React.FC<CryptoTableRowProps> = ({ asset, index }) => {
  const prevPriceRef = useRef(asset.price);
  const rowRef = useRef<HTMLTableRowElement>(null);
  
  useEffect(() => {
    if (prevPriceRef.current !== asset.price && rowRef.current) {
      const priceDiff = asset.price - prevPriceRef.current;
      const flashClass = priceDiff > 0 ? 'bg-green-500/5' : priceDiff < 0 ? 'bg-red-500/5' : '';
      
      if (flashClass) {
        rowRef.current.classList.add(flashClass);
        
        setTimeout(() => {
          rowRef.current?.classList.remove(flashClass);
        }, 700);
      }
    }
    
    prevPriceRef.current = asset.price;
  }, [asset.price]);
  
  return (
    <tr ref={rowRef} className="transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50">
      <td className="px-2 py-4 whitespace-nowrap">
        <FavoriteButton id={asset.id} isFavorite={asset.isFavorite} />
      </td>
      <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {asset.rank}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img src={asset.logo} alt={asset.name} className="w-6 h-6 mr-3" />
          <div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{asset.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900 dark:text-white">
        {formatPrice(asset.price)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
        <PriceChange value={asset.priceChange1h} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
        <PriceChange value={asset.priceChange24h} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
        <PriceChange value={asset.priceChange7d} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500 dark:text-gray-400">
        {formatLargeNumber(asset.marketCap)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
        <div className="text-gray-500 dark:text-gray-400">{formatLargeNumber(asset.volume24h)}</div>
        <div className="text-xs text-gray-400 dark:text-gray-500">{formatSupply(asset.volume24h / asset.price, asset.symbol)}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500 dark:text-gray-400">
        {formatSupply(asset.circulatingSupply, asset.symbol)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <SparklineChart data={asset.sparklineData} color={asset.priceChange7d >= 0 ? '#10B981' : '#EF4444'} />
      </td>
    </tr>
  );
};

export default CryptoTableRow;