import React from 'react';
import '../styles/components/_cookie-card.scss';

interface CookieCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const CookieCard: React.FC<CookieCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="cookie-card">
      <div className="cookie-image-wrapper">
        <img src={imageUrl} alt={name} className="cookie-image" />
      </div>
      <h3 className="cookie-name">{name}</h3>
      <p className="cookie-description">{description}</p>
      <a 
      href={`https://wa.me/628979237175?text=Halo,%20saya%20tertarik%20dengan%20${name}%20cookies%20Anda!`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn btn-primary"
    >
      Order Now
    </a>
    </div>
  );
};

export default CookieCard;
