import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
import './Profile.css';

function Profile() {
  const [index, setIndex] = useState(0);
  const professions = ['JAVA DEVELOPER', 'COMPETATIVE PROGRAMER', 'WEB 3 DEVELOPER', 'AI ENTHUSIAST', 'PYTHON DEVELOPER'];

  const handleTypingDone = () => {
    setIndex((prevIndex) => (prevIndex + 1) % professions.length);
  };

  return (
    <div className="profile">
      <div className="Profile-text">
      <h2>HI, I AM</h2>
      <h2>SATISH RATHOD.</h2>
      <Typewriter text={professions[index]} delay={100} onTypingDone={handleTypingDone} />
      <div>
        <button>DOWNLOAD resume</button>
      </div>
      </div>
    </div>
  );
}

export default Profile;