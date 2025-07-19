// import React from 'react';
import profile from '../../images/hero.jpg';
import { profileConfig } from '../../config/profile';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="profile-image-container">
        <img src={profile} alt={profileConfig.name} className="profile-image" />
      </div>
      <div className="about-content">
        <h1>Hello, I am {profileConfig.name}</h1>
        <p>
          I&apos;m currently studying {profileConfig.education}.
          {profileConfig.description}
        </p>
        <a 
          href={profileConfig.resumeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default About;
