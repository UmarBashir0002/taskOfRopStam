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
    console.log("Component mounted. isLoading:", isLoading);
    const MIN_LOADING_TIME = 2000; // Minimum time to show the loader
    const startTime = Date.now();
  
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = MIN_LOADING_TIME - elapsedTime;
      console.log("handleLoad triggered. Elapsed:", elapsedTime, "ms");
      if (remainingTime > 0) {
        setTimeout(() => {
          console.log("Minimum time passed, hiding loader.");
          setIsLoading(false);
        }, remainingTime);
      } else {
        console.log("Hiding loader immediately.");
        setIsLoading(false);
      }
    };
  
    if (document.readyState === "complete") {
      console.log("Document readyState is complete");
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback: hide loader after 5 seconds if load event isn't fired
      const fallbackTimeout = setTimeout(() => {
        console.log("Fallback timeout triggered");
        handleLoad();
      }, 5000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimeout);
      };
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
