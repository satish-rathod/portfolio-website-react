import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
import './Profile.css';

function Profile() {
  const [index, setIndex] = useState(0);
  const professions = ['UI/UX DESIGNER', 'WEB DEVELOPER', 'GRAPHIC DESIGNER', 'FRONT-END DEVELOPER'];

  const handleTypingDone = () => {
    setIndex((prevIndex) => (prevIndex + 1) % professions.length);
  };

  return (
    <div className="profile">
      <h2>HI, I AM SATRAT.</h2>
      <Typewriter text={professions[index]} delay={100} onTypingDone={handleTypingDone} />
      <div>
        <button>DOWNLOAD resume</button>
      </div>
    </div>
  );
}

export default Profile;