import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social-container">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
        <FaFacebook />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
        <FaTwitter />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default SocialMedia;
