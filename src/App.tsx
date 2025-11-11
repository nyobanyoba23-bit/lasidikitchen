import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CookieShowcase from './components/CookieShowcase';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Reviews from './components/Reviews'; // Import the Reviews component

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CookieShowcase />
      <AboutSection />
      <ContactSection />
      <Reviews /> {/* Add the Reviews component here */}
      <Footer />
    </div>
  );
}

export default App;
