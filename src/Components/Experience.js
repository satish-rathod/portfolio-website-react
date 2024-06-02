import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      period: "2018 - Present",
      title: "Creative Director",
      company: "Hoplony Tech Limited",
      location: "New York, USA",
      text: "some text here"
    },
    {
      period: "2016 - 2018",
      title: "Associate Design Director",
      company: "Hoplony Tech Limited",
      location: "New York, USA",
      text: "some text here"
    },
    {
      period: "2013 - 2016",
      title: "Senior UI/UX Designer",
      company: "Hoplony Tech Limited",
      location: "New York, USA",
      text: "some text here"
    },
    {
      period: "2012 - 2013",
      title: "UI/UX Designer",
      company: "Hoplony Tech Limited",
      location: "New York, USA",
      text: "some text here"
    },
    {
      period: "2010 - 2012",
      title: "Frontend Developer",
      company: "Hoplony Tech Limited",
      location: "New York, USA",
      text: "some text here"
    }
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
