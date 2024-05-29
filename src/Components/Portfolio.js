import React from 'react';
import '../App.css';

function Portfolio() {
  const projects = [
    "ui/ux design",
    "ui/ux design",
    "web design",
    "web development",
    "web development"
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={`path_to_image${index + 1}`} alt={project} />
            <p>{project}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
