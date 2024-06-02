import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    { type: "ui/ux design", images: 2 },
    { type: "web design", images: 1 },
    { type: "web development", images: 2 }
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        {projects.map((project, index) => (
          <div key={index} className={`portfolio-item ${project.images === 1 ? 'long' : ''}`}>
            {[...Array(project.images)].map((_, i) => (
              <img key={i} src={`path_to_image${index + 1}_${i + 1}`} alt={project.type} />
            ))}
            <p>{project.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;