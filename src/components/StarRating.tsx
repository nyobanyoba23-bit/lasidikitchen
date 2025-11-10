import React from 'react';

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>
        ★
      </span>
    );
  }

  return <div className={`star-rating ${className || ''}`}>{stars}</div>;
};

export default StarRating;
