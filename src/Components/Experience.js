import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      period: "2024 - Present",
      title: "intern",
      company: "Scaler Academy",
      location: "Bangalore, India",
      text: "making local video streaming app"
    },
    {
      period: "2023 - 2023",
      title: "team member : codewizards",
      company: "ICPC prelims",
      location: "Bangalore, India",
      text: "AIR 977 "
    },
  ];

    return (
      <div className="experience">
        <h2>Experience</h2>
        <div className="experience-content">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-item">
              <div className="experience-info">
                <h3>{experience.period}</h3>
                <p>{experience.title}</p>
              </div>
              <div className="experience-details">
                <h3>{experience.company}</h3>
                <p>{experience.location}</p>
                <p>{experience.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Experience;
