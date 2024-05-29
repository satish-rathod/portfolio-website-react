import React from 'react';
import '../App.css';

const Profiles = () => {
  return (
    <section id="profiles">
      <h2>Profiles</h2>
      <div className="profiles-list">
        <div className="profile-item">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="profile-item">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="profile-item">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
