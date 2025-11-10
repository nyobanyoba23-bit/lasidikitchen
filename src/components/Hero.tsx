import React from 'react';
import '../styles/components/_hero.scss';
import heroCookie from '../assets/images/Cookies with chocolate chips on white background….jpg'; // Using a different image to test

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Welcome to La Sidi Kitchen</h1>
          <p>Discover a world of delightful homemade treats, crafted with passion.</p>
          <a href="#cookies" className="btn btn-primary">Explore Our Flavors</a>
        </div>
        <div className="hero-image-container">
          <img src={heroCookie} alt="Delicious homemade cookies" />
        </div>
      </div>
    </section>
  );
};

export default Hero;