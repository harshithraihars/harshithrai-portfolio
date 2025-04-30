import { FaCode, FaMobileAlt } from "react-icons/fa";
import React from "react";
import AnimateOnScroll from "./AnimateScroll";
import Skills from "./Skills";

// Define the SkillCardProps interface
interface SkillCardProps {
  icon: React.ReactNode; // or JSX.Element
  title: string;
  description: string;
}

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="bg-white bg-opacity-5 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-opacity-10 hover:transform hover:scale-105">
      <div className="text-cyan-300 mb-4">{icon}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-cyan-100 text-sm">{description}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-bl from-white via-black to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center animate-fade-in-up">
              About Me
            </h2>
          </AnimateOnScroll>
          <div className="animation-box">
            <div className="bg-black bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-xl animate-fade-in-up animation-delay-200">
              <AnimateOnScroll delay={100}>
                <div>
                  <p className="text-white text-lg mb-6">
                  With over 2 years of experience in web development, I specialize in building end-to-end web applications that are robust, scalable, and maintainable. I’m driven by a passion for solving complex problems through clean architecture and efficient logic, while ensuring a smooth and intuitive user experience on the frontend.
                  </p>
                  <p className="text-white text-lg mb-8">
                  My expertise spans a diverse range of technologies and platforms, enabling me to deliver well-rounded, scalable solutions tailored to the specific requirements of each project.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="grid grid-cols-2 gap-6 w-full">
                  <SkillCard
                    icon={<FaCode className="w-8 h-8" />}
                    title="Web Development"
                    description="Custom web applications using modern frameworks and technologies"
                  />
                  <SkillCard
                    icon={<FaMobileAlt className="w-8 h-8" />}
                    title="App Development"
                    description="Building user-friendly Mobile applications with modern technologies"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
      <AnimateOnScroll delay={100}>
        <div className="flex justify-center">
          <Skills />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
