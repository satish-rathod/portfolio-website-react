import React from 'react';
import '../App.css';

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
      {experiences.map((exp, index) => (
        <div key={index} className="exp-item">
          <div>
          <h3>{exp.period}</h3>
          <h4>{exp.title}</h4>
          </div>
          <div>
          <h5>{exp.company}</h5>
          <h6>{exp.location}</h6>
          <p>{exp.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
