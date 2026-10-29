// Projects.js
import React, { useState } from "react";
import "../styles/Projects.css";
import snakeImage from "../assets/snake.png";
import convoCapureImage from "../assets/concocapture.png";
import weather from "../assets/weather.png";
import fixitnow from "../assets/FixItNow.png";
import coa from "../assets/coa.png";
import dsa from "../assets/dsa.png";
import codearena from "../assets/codearena.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("major");

  const projects = [
    {
      title: "CodeArena - Coding Practice Platform",
      category: "major",
      duration: "Oct 2026",
      description:
        "A LeetCode-style coding practice platform with an in-browser Monaco editor, multi-language code execution via Judge0, an admin problem-publishing workflow, and an AI hint assistant.",
      keyFeatures: [
        "Developed a full-stack platform with React, Node.js, Express.js, and MongoDB, exposing 17 REST API endpoints and a Monaco editor to solve problems in 3 languages (C++, Java, JavaScript) via the Judge0 API",
        "Secured the app with JWT authentication in httpOnly cookies, bcrypt hashing, role-based access control, and a Redis token blocklist for logout revocation",
        "Rate-limited Run and Submit to 10 and 5 requests/min per user to protect the code-execution quota",
        "Built an admin panel that verifies reference solutions in all 3 languages against every visible and hidden test case before a problem is published, and added a Google Gemini hint assistant",
      ],
      technologies: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "DaisyUI",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "JWT",
        "Judge0 API",
        "Gemini API",
      ],
      image: codearena,
      links: {
        github: "https://github.com/Sachinrajawat/codearena",
        live: "https://codearena-beryl.vercel.app/",
      },
    },
    {
      title: "DSA Field Guide - Algorithm Visualizer",
      category: "major",
      duration: "May 2026",
      description:
        "An interactive algorithm visualization platform for sorting, pathfinding, and BST operations, with scrubbable step-by-step playback so learners can move forward and backward through every operation.",
      keyFeatures: [
        "Architected a React SPA modeling 6 algorithms (Sorting, Pathfinding, BST) as pure functions returning step snapshots, enabling scrubbable step-back/forward playback and DOM-free unit testing",
        "Implemented Bubble Sort, Merge Sort, Quick Sort, BFS, and Dijkstra's with a hand-rolled binary min-heap, plus a recursive-backtracker maze generator and weighted-grid pathfinding",
        "Built a race mode that runs three sorting algorithms in parallel on the same input with synchronized playback",
        "Shipped with 14 unit tests, GitHub Actions CI, and Vercel deployment with SPA-rewrite routing",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
        "Vite",
        "HTML",
        "CSS",
      ],
      image: dsa,
      links: {
        github: "https://github.com/Sachinrajawat/dsa-field-guide",
        live: "https://dsa-field-guide.vercel.app/",
      },
    },
    {
      title: "Codebase Onboarding Assistant",
      category: "major",
      duration: "May 2026",
      description:
        "A RAG-based web application that lets developers chat with any public GitHub repository. Every answer is grounded in retrieved code and cited to exact line numbers on GitHub.",
      keyFeatures: [
        "Built and deployed a full-stack RAG application that indexed 20,000-line GitHub repositories into Qdrant in under 60 seconds at $0.005 per repository using tree-sitter AST chunking and OpenAI embeddings",
        "Designed hybrid retrieval merging top-8 vector search with exact symbol-name matching across 2,000+ code chunks, improving precision on direct-identifier queries that pure vector search missed",
        "Implemented Server-Sent Events token streaming with line-numbered GitHub citations on every answer, eliminating hallucinated file and function reference errors common in LLM code answers",
        "Production deployment across Vercel, Render, MongoDB Atlas, and Qdrant Cloud with zod validation, rate limiting on expensive endpoints, and 23 unit tests on the URL parser and keyword extractor",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Qdrant",
        "OpenAI",
        "tree-sitter",
        "Tailwind CSS",
        "Docker",
      ],
      image: coa,
      links: {
        github:
          "https://github.com/Sachinrajawat/codebase-onboarding-assistant",
        live: "https://codebase-onboarding-assistant.vercel.app/",
      },
    },
    {
      title: "FixItNow - Home Services Marketplace",
      category: "major",
      duration: "Apr 2025",
      description:
        "Full-stack home-services marketplace with text and geospatial search, JWT auth with rotating refresh tokens, and race-safe booking via MongoDB partial unique indexes.",
      keyFeatures: [
        "Built a full-stack home-services marketplace as a TypeScript monorepo with Next.js and Express, sharing Zod schemas across web and API to enforce a single validation contract end-to-end",
        "Designed JWT authentication with 15-minute access tokens and 7-day refresh tokens stored in a Redis allowlist, supporting single-use rotation and full session revocation on logout",
        "Prevented race-safe double-booking via a MongoDB partial unique index on active bookings that permits rebooking after cancellation, verified by 104 integration and component tests",
        "Production deployment on Vercel + Render + MongoDB Atlas + Upstash Redis with cache-aside, rate limiting, and a one-click Render Blueprint",
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "Express",
        "MongoDB",
        "Redis",
        "Zod",
        "JWT",
        "Docker",
      ],
      image: fixitnow,
      links: {
        github: "https://github.com/Sachinrajawat/FixItNow",
        live: "https://fix-it-now-web-in9h.vercel.app/",
      },
    },
    {
      title: "WeatherVue - Weather App",
      category: "minor",
      duration: "Apr 2024",
      description:
        "A responsive weather forecasting web app displaying real-time weather data based on user location or search input.",
      keyFeatures: [
        "Fetched live weather data using external API",
        "Displayed temperature, conditions, and location dynamically",
        "Designed clean, responsive UI for desktop and mobile devices",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      image: weather,
      links: {
        github: "https://github.com/Sachinrajawat/WeatherVue",
        live: "https://weathervuez.netlify.app/",
      },
    },
    {
      title: "SnakeRush - Browser Game",
      category: "minor",
      duration: "May 2024",
      description:
        "Interactive browser-based Snake game with smooth controls and scoring system.",
      keyFeatures: [
        "Developed smooth movement mechanics",
        "Implemented collision detection system",
        "Optimized rendering for better performance",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      image: snakeImage,
      links: {
        github: "https://github.com/Sachinrajawat/SnakeRush",
        live: "https://sachinrajawat.github.io/SnakeRush/",
      },
    },
  ];

  const filters = [
    { key: "major", label: "Major Projects" },
    { key: "minor", label: "Minor Projects" },
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter,
  );

  const handleScrollClick = () => {
    const contactSection = document.getElementById("coding-profiles");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${
                activeFilter === filter.key ? "active" : ""
              }`}
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
              style={{ "--i": index }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <i className="fab fa-github"></i>
                      <span>View Code</span>
                    </a>
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link demo"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                    )}
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
                      <span className="tech-tag" key={idx}>
                        {tech}
                      </span>
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
