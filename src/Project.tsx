import { FaGlobe, FaWordpress, FaShopify, FaGithub } from "react-icons/fa";
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
    link: "/",
  },
  {
    id: 2,
    title: "Alertify",
    type: "web",
    description:
      "A Chrome extension for tracking product prices and deals on Flipkart.",
    link: "/",
  },
  {
    id: 3,
    title: "TypeSpeed",
    type: "web",
    description:
      "A typing practice tool to help users improve their typing speed and accuracy through interactive challenges and real-time feedback.",
    link: "/",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-black via-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center animate-fade-in-up">
          My Projects
        </h2>
        <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-200"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          <div
            className="bg-red bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-xl transition-all duration-300 hover:bg-opacity-20 animate-fade-in-up"
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
              Check out my GitHub profile to see more of my work, contributions,
              and open-source projects.
            </p>

            {/* Button */}
            <div className="flex justify-center">
             <a href="https://www.github.com/harshithraihars">
             <button className="visit-github">
                Visit my Github
                <div className="arrow-wrapper">
        <div className="arrow"></div>

    </div>
              </button>
             </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const icons = {
    web: <FaGlobe className="w-6 h-6" />,
    wordpress: <FaWordpress className="w-6 h-6" />,
    shopify: <FaShopify className="w-6 h-6" />,
  };

  return (
    <div
      className="bg-red bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-xl transition-all duration-300 hover:bg-opacity-20 animate-fade-in-up"
      style={{
        animationDelay: `${index * 100}ms`,
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
