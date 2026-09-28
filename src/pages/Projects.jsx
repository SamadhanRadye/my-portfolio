import React, { useState } from 'react';
import './Projects.css';

import Project1 from "../projects/Project1";
import Project2 from "../projects/Project2";
import Project3 from "../projects/Project3";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 1,
      title: "Blogging Platform",
      category: "react js and java (spring boot)",
      shortDesc: "A minimalist banking interface.",
      image: "/images/blog-platform.jpg",
    },
    {
      id: 2,
      title: "Modern Portfolio",
      category: "WEB DEVELOPMENT",
      shortDesc: "Pixel perfect minimalist design.",
      image:
        "https://futurevisioncomputers.com/wp-content/uploads/2024/03/web_development_Z62jy4k-1024x576.jpg",
    }
  ];

  // 👇 render selected project component
  if (selectedProject === 1) return <Project1 />;
  if (selectedProject === 2) return <Project2 />;
  if (selectedProject === 3) return <Project3 />;

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="projects-title text-center text-md-start">
          Featured Work
        </h2>

        <div className="row g-4">
          {projectData.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div
                className="project-card"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project.id);
                  }
                }}
              >
                <div className="project-img-container">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-info">
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3 className="project-name">{project.title}</h3>
                  <p className="text-muted small">{project.shortDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;