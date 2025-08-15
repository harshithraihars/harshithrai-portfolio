// App.tsx
import React, { useState, useEffect } from "react";
import HeroSection from "./Hero";
import AboutSection from "./About";
import ProjectSection from "./Project";
import ContactSection from "./Contact";
import MobileNavBar from "./MobileNavBar";
import LoadingScreen from "./LoadingScreen";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen/>
      ) : (
        <>
          <MobileNavBar />
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </>
      )}
    </>
  );
};

export default App;
