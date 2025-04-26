import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useAppDispatch } from '../../hooks/redux';
import { toggleFavorite } from '../../features/crypto/cryptoSlice';

interface FavoriteButtonProps {
  id: string;
  isFavorite: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ id, isFavorite }) => {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    dispatch(toggleFavorite(id));
  };
  
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="focus:outline-none"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Star 
        size={18} 
        className={`transition-colors duration-200 ${
          isFavorite ? 'text-yellow-400 fill-yellow-400' : isHovered ? 'text-gray-400' : 'text-gray-300'
        }`} 
      />
    </button>
  );
};

export default FavoriteButton;