import "./project.css";
import { useEffect, useRef } from "react";
import EPL from "../../assets/EPL.png";
import Fridge from "../../assets/Fridge.png";
import IT from "../../assets/IT.png";
import Logo from "../../assets/Portfolio.png";

const Projects = () => {
  const projectsRef = useRef([]);

  const projects = [
    {
      image: Logo,
      name: "My Portfolio",
      description: "A minimalist portfolio website showcasing my journey as a Software Engineering student, featuring projects, skills, and responsive design to highlight technical expertise and creativity.",
      url: "https://github.com/Alina-Ivashchenko/Portfolio",
    },
    {
      image: Fridge,
      name: "Smart Fridge Assistant",
      description: "The Smart Fridge Assistant is a comprehensive web application designed to manage food inventory, track expiry dates, generate AI-based recipe suggestions, and provide nutritional information.",
      url: "https://github.com/Alina-Ivashchenko/Smart-Fridge-Assistant",
    },
    {
      image: EPL,
      name: "EPL Predictor",
      description: "The EPL Predictor project forecasts English Premier League match outcomes, predicting whether teams will win or lose based on historical data and statistical analysis.",
      url: "https://github.com/Alina-Ivashchenko/EPL-Predictor",
    },
    {
      image: IT,
      name: "Help Desk Scheduling and Task Management System",
      description: "The Help Desk Scheduling and Task Management System streamlines scheduling, task assignment, and management for help desk staff, improving efficiency with automated scheduling and real-time updates.",
      url: "https://github.com/Alina-Ivashchenko/scheduling_taskManagement",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      projectsRef.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            ref.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="projects" className="Projects">
      <div className="projectsDiv">
        <p className="pTitle">PROJECTS</p>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="project-card-link"
          >
            <div
              ref={(el) => (projectsRef.current[index] = el)}
              className="project-card fade-section"
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-overlay">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
