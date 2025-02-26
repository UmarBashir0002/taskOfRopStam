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
    const handleLoad = () => {
      console.log('All assets loaded, hiding loader.');
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
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
