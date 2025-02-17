import { FaReact, FaNode, FaGit, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiVite, SiSqlite } from 'react-icons/si';

const TechStack = () => {
  return (
    <div className="tech-stack-container">
      <h2 className="section-title">My Tech Stack</h2>
      <div className="tech-icons-container">
        {/* React */}
        <div className="tech-item">
          <FaReact className="tech-icon" />
          <p className="tech-name">React</p>
        </div>
        {/* Next.js */}
        <div className="tech-item">
          <SiNextdotjs className="tech-icon" />
          <p className="tech-name">Next.js</p>
        </div>
        {/* Tailwind CSS */}
        <div className="tech-item">
          <SiTailwindcss className="tech-icon" />
          <p className="tech-name">Tailwind CSS</p>
        </div>
        {/* Redux */}
        <div className="tech-item">
          <SiRedux className="tech-icon" />
          <p className="tech-name">Redux</p>
        </div>
        {/* MongoDB */}
        <div className="tech-item">
          <SiMongodb className="tech-icon" />
          <p className="tech-name">MongoDB</p>
        </div>
        {/* Node.js */}
        <div className="tech-item">
          <FaNode className="tech-icon" />
          <p className="tech-name">Node.js</p>
        </div>
        {/* Express.js */}
        <div className="tech-item">
          <SiExpress className="tech-icon" />
          <p className="tech-name">Express.js</p>
        </div>
        {/* Git */}
        <div className="tech-item">
          <FaGit className="tech-icon" />
          <p className="tech-name">Git</p>
        </div>
        {/* GitHub */}
        <div className="tech-item">
          <FaGithub className="tech-icon" />
          <p className="tech-name">GitHub</p>
        </div>
        {/* JavaScript */}
        <div className="tech-item">
          <SiJavascript className="tech-icon" />
          <p className="tech-name">JavaScript</p>
        </div>
        {/* TypeScript */}
        <div className="tech-item">
          <SiTypescript className="tech-icon" />
          <p className="tech-name">TypeScript</p>
        </div>
        {/* Vite */}
        <div className="tech-item">
          <SiVite className="tech-icon" />
          <p className="tech-name">Vite</p>
        </div>
        {/* SQL */}
        <div className="tech-item">
          <SiSqlite className="tech-icon" />
          <p className="tech-name">SQL</p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

