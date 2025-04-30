import { useState, useEffect } from "react";
import { FaCode, FaEnvelope } from "react-icons/fa";
import ProfileImg from "./img/Profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { trefoil } from "ldrs";
import AnimateOnScroll from "./AnimateScroll";

trefoil.register();

// Default values shown
export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);
  
  const handleTooggle = () => {
    setIsMenuOpen(false);
  };
  
  const menuItems = ["Home", "About", "Projects", "Contact"];
  const [transform, setTransform] = useState("");
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: any) => {
    const box = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - box.left;
    const mouseY = e.clientY - box.top;

    // Calculate tilt angles
    const rotateY = (mouseX / box.width - 0.5) * 20;
    const rotateX = (mouseY / box.height - 0.5) * -20;

    // Update glare position
    const glareX = (mouseX / box.width) * 100;
    const glareY = (mouseY / box.height) * 100;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    );
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    );
    setGlarePosition({ x: 50, y: 50 });
  };
  
  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-black px-0 md:px-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 box-border">
        <nav className="fixed top-0 left-4 right-12 z-50 bg-transparent backdrop-blur-sm flex justify-between items-center p-4 sm:p-9">
          <div className="flex justify-between items-center gap-4">
            <l-trefoil
              size="32"
              stroke="4"
              stroke-length="0.15"
              bg-opacity="0.2"
              speed="2"
              color="#a5f3fc"
            ></l-trefoil>
            <a href="/" className="text-white text-2xl font-bold">
              DevPortfolio
            </a>
          </div>

          <div className="sm:hidden"></div>
          <div className="hidden sm:block sm:absolute sm:right-0 lg:right-10">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white hover: relative group text-xl z-20"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] mt-20 lg:mt-0">
          <div className="text-center lg:text-left lg:w-1/2 mb-4 lg:mb-0">
            <AnimateOnScroll delay={0}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="text-cyan-300">
                  <TypeAnimation
                    sequence={["Harshith Rai", 2000, ""]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={100}>
              <p className="text-2xl md:text-2xl text-cyan-200 mb-4">
                Full-stack Developer
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <p className="text-white text-lg mb-6 max-w-2xl">
                I craft beautiful, responsive, and user-friendly web applications.
                With a passion for clean code and innovative design, I bring ideas
                to life in the digital realm.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-white text-purple-700 hover:bg-cyan-100 px-6 py-3 rounded-full font-semibold flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaCode className="mr-2" />
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-6 py-3 rounded-full font-semibold flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaEnvelope className="mr-2" />
                  Contact Me
                </button>
              </div>
            </AnimateOnScroll>
          </div>
          
          <AnimateOnScroll delay={400}>
            <div className="lg:w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div
                className="relative w-64 h-64 md:w-80 md:h-96 rounded-full md:rounded-[20px] overflow-hidden border-4 border-white md:border-none md:shadow-2xl shadow-lg tilt-box-wrap"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transition: "transform 0.2s ease-out",
                  transform: transform,
                }}
              >
                <div className="tilt-box relative w-full h-full">
                  {/* Glare Effect */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)`,
                      transition: "background 0.1s ease-out",
                    }}
                  />

                  {/* Profile Image */}
                  <img
                    src={ProfileImg}
                    alt="Harshith Rai"
                    className="w-full h-full object-cover rounded-lg shadow-lg md:rounded-[20px] shadow-gray-500/50 bending-image"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
      <div className="" onClick={() => handleTooggle()}></div>
    </div>
  );
}