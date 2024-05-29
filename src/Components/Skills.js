import React from 'react';
import '../App.css';

function Skills() {
  const skills = [
    { name: "Adobe Photoshop", level: "90%" },
    { name: "Adobe Illustrator", level: "85%" },
    { name: "Adobe After Effects", level: "97%" },
    { name: "Sketch", level: "90%" },
    { name: "HTML 5", level: "90%" },
    { name: "CSS 3 Animation", level: "85%" },
    { name: "Communication", level: "97%" },
    { name: "Creativity", level: "90%" },
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <h3>{skill.name}</h3>
          <div className="skill-level" style={{ width: skill.level }}>{skill.level}</div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
