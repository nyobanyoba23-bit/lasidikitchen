import React from 'react';
import { cookieData } from '../data/cookies';
import CookieCard from './CookieCard';
import '../styles/components/_cookie-showcase.scss';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CookieShowcase: React.FC = () => {
  const [domRef, isVisible] = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={domRef as React.RefObject<HTMLElement>} // Explicitly cast domRef
      className={`cookie-showcase scroll-animation ${isVisible ? 'is-visible' : ''}`}
      id="cookies"
    >
      <div className="container">
        <h2 className="section-title">Our Signature Cookies</h2>
        <div className="cookie-grid">
          {cookieData.map(cookie => (
            <CookieCard key={cookie.id} imageUrl={cookie.image} name={cookie.name} description={cookie.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CookieShowcase;