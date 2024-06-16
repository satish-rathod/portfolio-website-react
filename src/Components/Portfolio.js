import React from 'react';
import './Portfolio.css';
import image1 from '../assets/images/path_to_image1_1.jpg';
import image2 from '../assets/images/path_to_image1_2.jpeg';
import image3 from '../assets/images/path_to_image2_1.jpg';
import image4 from '../assets/images/path_to_image3_1.jpeg';
import image5 from '../assets/images/path_to_image3_2.jpg';

function Portfolio() {
  const projects = [
    { type: "ui/ux design", images: [image1, image2] },
    { type: "web design", images: [image3] },
    { type: "web development", images: [image4, image5] }
  ];

  return (
    <div className="portfolio">
      <h2 className='centered-text'>Portfolio</h2>
      <div className="portfolio-items">
        {projects.map((project, index) => (
          <div key={index} className={`portfolio-item ${index === 1 ? 'long' : 'same-size'}`}>   
                   {project.images.map((image, i) => (
              <img key={i} src={image} alt={project.type} />
            ))}
            {/* <p>{project.type}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;