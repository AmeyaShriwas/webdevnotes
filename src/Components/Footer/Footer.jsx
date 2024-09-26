import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Part 1: Logo, description, social media, email, number */}
      <div className="footer-part">
      <div className="Flogo">
        <span className="Flogo-icon">{`</>`}</span>
        <span className="Flogo-text">webDevNotes</span>
      </div>
        <p className="footer-description">
          Providing quality content and support for all your learning needs. Follow us on social media to stay updated!
        </p>
        <div className="footer-social">
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaLinkedin className="social-icon" />
        </div>
        <p className="footer-email">Email: info@company.com</p>
        <p className="footer-number">Phone: +123 456 7890</p>
      </div>

      {/* Part 2: Categories */}
      <div className="footer-part">
        <h3>Categories</h3>
        <ul className="footer-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
        </ul>
      </div>

      {/* Part 3: Categories */}
      <div className="footer-part">
        <h3>More Categories</h3>
        <ul className="footer-list">
          <li>Node JS</li>
          <li>Express JS</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </div>

      {/* Part 4: Categories */}
      <div className="footer-part">
        <h3>Resources</h3>
        <ul className="footer-list">
          <li>Documentation</li>
          <li>Tutorials</li>
          <li>Blog</li>
          <li>Support</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
