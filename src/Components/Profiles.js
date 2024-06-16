import React, { useState } from 'react';
import './Profiles.css';
import githubLogo from '../assets/logos/github.png';
import linkedinLogo from '../assets/logos/linkedin.png';
import twitterLogo from '../assets/logos/twitter.png';
import instagramLogo from '../assets/logos/instagram.png';
import youtubeLogo from '../assets/logos/youtube.png';
import telegramLogo from '../assets/logos/telegram.png';
import discordLogo from '../assets/logos/discord.png';
import redditLogo from '../assets/logos/reddit.png';

function ProfileItem({ profile }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`profile-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={profile.url} target="_blank" rel="noopener noreferrer"></a>
      <img src={profile.logo} alt={`${profile.name} Logo`} className="profile-logo" />
    </div>
  );
}

function Profiles() {
  const profiles = [
    { name: "github", url: "https://github.com/yourusername", logo: githubLogo },
    { name: "linkedin", url: "https://linkedin.com/in/yourusername", logo: linkedinLogo },
    { name: "twitter", url: "https://twitter.com/yourusername", logo: twitterLogo },
    { name: "instagram", url: "https://instagram.com/yourusername", logo: instagramLogo },
    { name: "youtube", url: "https://youtube.com/yourusername", logo: youtubeLogo },
    { name: "telegram", url: "https://t.me/yourusername", logo: telegramLogo },
    { name: "discord", url: "https://discord.com/yourusername", logo: discordLogo },
    { name: "reddit" , url: "https://reddit.com/yourusername", logo: redditLogo },
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