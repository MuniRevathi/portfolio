// import React from 'react'
import hero from '../../images/landimg.png';
import { profileConfig } from '../../config/profile';
import './Home.css'; 
import Skills from '../Experience/Skills';

const Home = () => {
  return (
    <div className="home">

      <header className="header-section">
        <div className="header-text">
          <h1>Hi, I&apos;m {profileConfig.name}</h1>
  
          <h3>{profileConfig.title}</h3>
          <br /><br />
          <a target="_blank" href={profileConfig.resumeLink} className="cta" rel="noopener noreferrer"> Download Resume </a>
        </div>

        <div className="header-image">
          <img src={hero} alt="Hero background" />
        </div>

      </header>
      <h1 style={{color:'pink', textAlign:'center'}} >TECH I AM GOOD AT</h1>
      <Skills/>

    </div>
  )
}

export default Home