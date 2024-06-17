import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: "java", level: "55%" },
    { name: "DSA", level: "70%" },
    { name: "Python", level: "55%" },
    { name: "Draw Io", level: "60%" },
    { name: "Vanilla Js", level: "70%" },
    { name: "springboot", level: "65%" },
    { name: "Communication", level: "97%" },
    { name: "Creativity", level: "90%" },
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-content">
        
        <div className="skills-column">
          {skills.slice(0, 4).map((skill, index) => (
            <div key={index} className="skill">
              <h3>{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-progress" style={{ width: skill.level }}></div>
                <span>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-column">
          {skills.slice(4).map((skill, index) => (
            <div key={index} className="skill">
              <h3>{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-progress" style={{ width: skill.level }}></div>
                <span>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Skills;