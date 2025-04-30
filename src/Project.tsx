import { FaGlobe, FaWordpress, FaShopify, FaGithub } from "react-icons/fa";
import AnimateOnScroll from "./AnimateScroll";

type ProjectType = "web" | "wordpress" | "shopify";

interface Project {
  id: number;
  title: string;
  type: ProjectType;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Application",
    type: "web",
    description:
      "A social media platform for connecting, sharing, and engaging with others.",
    link: "https://github.com/harshithraihars/social-media",
  },
  {
    id: 2,
    title: "Alertify",
    type: "web",
    description:
      "A Chrome extension for tracking product prices and deals on Flipkart.",
    link: "https://github.com/harshithraihars/Alertify",
  },
  {
    id: 3,
    title: "TypeSpeed",
    type: "web",
    description:
      "A typing practice tool to help users improve their typing speed and accuracy through interactive challenges and real-time feedback.",
    link: "https://github.com/harshithraihars/typing-speed",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-black via-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            My Projects
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 100}>
              <ProjectCard project={project} index={index} />
            </AnimateOnScroll>
          ))}

          <AnimateOnScroll delay={projects.length * 100}>
            <div
              className="bg-red bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-xl transition-all duration-300 hover:bg-opacity-20"
              style={{
                boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)", // White shadow
              }}
            >
              {/* GitHub Logo */}
              <div className="flex justify-center mb-6">
                <FaGithub className="text-white text-5xl" />
              </div>
              {/* Title - Explore More Projects */}
              <h3 className="text-white text-xl font-semibold text-center mb-2">
                Explore More Projects
              </h3>
              {/* Description Text */}
              <p className="text-cyan-100 text-sm text-center mb-6">
                Check out my GitHub profile to see more of my work,
                contributions, and open-source projects.
              </p>
              {/* Button */}
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <a href="https://github.com/harshithraihars">
                    <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                      <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                        <div className="relative z-10 flex items-center space-x-2">
                          <span className="transition-all duration-500 group-hover:translate-x-1">
                            Visit my Github
                          </span>
                          <svg
                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            data-slot="icon"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project }: ProjectCardProps) {
  const icons = {
    web: <FaGlobe className="w-6 h-6" />,
    wordpress: <FaWordpress className="w-6 h-6" />,
    shopify: <FaShopify className="w-6 h-6" />,
  };

  return (
    <div
      className="bg-red bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-xl transition-all duration-300 hover:bg-opacity-20"
      style={{
        boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)", // White shadow
      }}
    >
      <div className="text-cyan-300 mb-4">{icons[project.type]}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-cyan-100 text-sm mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-300 hover:text-white transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  );
}
