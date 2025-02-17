import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HeroSection from "./Hero.tsx";
import AboutSection from "./About.tsx";
import ProjectSection from "./Project.tsx";
import ContactSection from "./Contact.tsx";
import MobileNavBar from "./MobileNavBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MobileNavBar/>
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <ContactSection />
  </React.StrictMode>
);
