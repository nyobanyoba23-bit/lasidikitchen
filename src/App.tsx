import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CookieShowcase from './components/CookieShowcase';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CookieShowcase />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;