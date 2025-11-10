import React from 'react';
import '../styles/components/_about-section.scss';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const [domRef, isVisible] = useScrollAnimation();

  return (
    <section id="about" className={`about-section ${isVisible ? 'is-visible' : ''}`} ref={domRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About La Sidi Kitchen</h2>
          <p>
            Welcome to La Sidi Kitchen, where every cookie tells a story of passion, tradition, and the finest ingredients.
            Our journey began with a simple dream: to bake the most delicious, heartwarming cookies that bring joy to every bite.
          </p>
          <p>
            We meticulously select premium flour, rich butter, and the finest chocolates, ensuring each cookie is a masterpiece.
            From classic chocolate chip to exotic spice blends, our diverse menu is crafted to delight every palate.
          </p>
          <p>
            At La Sidi Kitchen, baking is more than just a process; it's an art form. We believe in creating moments of happiness,
            one cookie at a time. Join us in celebrating the sweet life!
          </p>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/500x350/F8CBA6/4A2C2A?text=About+Us" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
