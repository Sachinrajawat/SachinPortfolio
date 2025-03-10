// Skills.js
import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const technicalSkills = [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    },
    {
      name: "R",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "Tableau",
      // Using Font Awesome icon for Tableau
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS40IGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGZpbGw9IiM2NGZmZGEiIGQ9Ik0zODQgMzJ2MTkySDI1NlYzMmgxMjh6bS0xMjggMjI0aDEyOHYxOTJIMjU2VjI1NnpNMTkyIDMydjE5Mkg2NFYzMmgxMjh6TTY0IDI1NmgxMjh2MTkySDY0VjI1NnpNMCA0NDhoNDQ4djMySDB2LTMyek0wIDMyaDQ0OHYzMkgwVjMyeiIvPjwvc3ZnPg=="
    },
    {
      name: "Hadoop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    }

  ];

  const handleScrollClick = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div 
              className="skill-card" 
              key={index}
              style={{ '--i': index }} // For staggered animation
            >
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>

        <div 
          className="scroll-indicator" 
          onClick={handleScrollClick} 
          role="button" 
          tabIndex={0}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;