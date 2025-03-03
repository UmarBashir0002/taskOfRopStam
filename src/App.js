import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import AfterHeroSection from './components/AfterHeroSection';
import Testimonials from './components/Testimonials';
import Steps from './components/Steps';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import Loading from './components/loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_DISPLAY_TIME = 2000; // 2 seconds
  
    const handleLoad = () => {
      setTimeout(() => {
        console.log('Assets loaded and minimum time passed, hiding loader.');
        setIsLoading(false);
      }, MIN_DISPLAY_TIME);
    };
  
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <AfterHeroSection />
      <Testimonials />
      <Steps />
      {/* <FeaturedOn /> */}
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
