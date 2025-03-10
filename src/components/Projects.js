// Projects.js
import React, { useState } from 'react';
import '../styles/Projects.css';
import snakeImage from '../assets/snake.png';
import convoCapureImage from '../assets/concocapture.png'
import chat from '../assets/chat.png'
import job from '../assets/job.png'



function Projects() {
  const [activeFilter, setActiveFilter] = useState('major');

  const projects = [
    {
      title: "JobHaven - Job Portal",
      category: "major",
      duration: "Dec 2024 – Jan 2025",
      description: "A scalable job portal featuring user authentication and role-based access, supporting 100+ active users.",
      keyFeatures: [
        "Developed user authentication and role-based access system",
        "Integrated dynamic job posting and application tracking",
        "Optimized API responses, reducing load time by 20%"
      ],
      technologies: [
        "MongoDB", "Express.js", "React.js", "Node.js",
        "JWT", "Redux", "RESTful APIs"
      ],
      image: job, // Add your project image path
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "TalkHub - Real-Time Messaging",
      category: "major",
      duration: "Oct 2024 – Nov 2024",
      description: "Real-time chat application supporting 50+ simultaneous users with Socket.io integration.",
      keyFeatures: [
        "Built real-time messaging with Socket.io",
        "Implemented secure user authentication",
        "Optimized message delivery, reducing latency by 15%"
      ],
      technologies: [
        "MongoDB", "Express.js", "React.js", "Node.js",
        "Socket.io", "JWT", "Tailwind CSS"
      ],
      image: chat,
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "SnakeRush - Browser Game",
      category: "minor",
      duration: "May 2024",
      description: "Interactive browser-based Snake game with smooth controls and scoring system.",
      keyFeatures: [
        "Developed smooth movement mechanics",
        "Implemented collision detection system",
        "Optimized rendering for better performance"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      image: snakeImage,
      links: {
        github: "https://github.com/Sachinrajawat/SnakeRush",
        live: "https://sachinrajawat.github.io/Smart-Meeting-Assistant/"
      }
    },
    {
      title: "ConvoCapture AI – Smart Meeting Assistant",
      category: "minor",
      duration: "Feb 2025",
      description: "AI-powered meeting assistant leveraging Google's Gemini API and Web Speech for intelligent meeting management.",
      keyFeatures: [
        "95%+ accurate real-time transcription using Web Speech API",
        "Automated action item extraction and key point identification",
        "Integrated PDF generation and email sharing",
        "Seamless calendar event creation"
      ],
      technologies: [
        "HTML5", 
        "CSS3", 
        "JavaScript", 
        "Web Speech API", 
        "Google Gemini API"
      ],
      image: convoCapureImage, // Add the image import
      links: {
        github: "https://github.com/Sachinrajawat/Smart-Meeting-Assistant", // Add your actual GitHub link
        live: "https://sachinrajawat.github.io/Smart-Meeting-Assistant/" // Add live demo link if available
      }
    }
  ];

  const filters = [
    { key: 'major', label: 'Major Projects' },
    { key: 'minor', label: 'Minor Projects' }
  ];

  const filteredProjects = projects.filter(project => project.category === activeFilter);

  const handleScrollClick = () => {
    const contactSection = document.getElementById('coding-profiles');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              className={`project-card ${project.category}`} 
              key={index}
              style={{ '--i': index }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                      <i className="fab fa-github"></i>
                      <span>View Code</span>
                    </a>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link demo">
                      <i className="fas fa-external-link-alt"></i>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="duration">
                    <i className="far fa-calendar-alt"></i>
                    {project.duration}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="key-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span className="tech-tag" key={idx}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
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

export default Projects;