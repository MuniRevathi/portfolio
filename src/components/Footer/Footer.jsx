// import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import './Footer.css'; // Import a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Follow Me</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ch-muni-revathi-82692b300/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://github.com/MuniRevathi" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>Built by Ch Muni Revathi &copy; 2025.</p>
    </footer>
  );
};

export default Footer;
