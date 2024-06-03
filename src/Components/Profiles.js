import React, { useState } from 'react';
import './Profiles.css';

function ProfileItem({ profile }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`profile-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="profile-symbol">{profile.symbol}</div>
      <a href={profile.url} target="_blank" rel=" noreferrer">{profile.name}</a>
    </div>
  );
}

function Profiles() {
  const profiles = [
    { name: "GitHub", url: "https://github.com/yourusername", symbol: "G" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", symbol: "L" },
    { name: "Twitter", url: "https://twitter.com/yourusername", symbol: "T" },
  ];

  return (
    <section className="profiles">
      <h2>Profiles</h2>
      <div className="profiles-content">
        {profiles.map((profile, index) => (
          <ProfileItem key={index} profile={profile} />
        ))}
      </div>
    </section>
  );
}

export default Profiles;