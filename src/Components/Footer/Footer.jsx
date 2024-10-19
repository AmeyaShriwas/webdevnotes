import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const socialIcons = [
  { icon: FaFacebook, name: 'Facebook' },
  { icon: FaTwitter, name: 'Twitter' },
  { icon: FaInstagram, name: 'Instagram' },
  { icon: FaLinkedin, name: 'LinkedIn' }
];

const categories = ['HTML', 'CSS', 'JavaScript', 'React JS'];

const resources = [
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Refund & Cancellation Policy', path: '/refund-policy' },
  { name: 'Digital Download Policy', path: '/shipping-policy' }
];

const Footer = React.memo(() => {
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
          {socialIcons.map(({ icon: Icon, name }, index) => (
            <Icon key={index} className="social-icon" aria-label={name} />
          ))}
        </div>
        <p className="footer-email">Email: ameya0015@gmail.com</p>
        <p className="footer-number">Phone: 7354820386</p>
        <p className="footer-number">Address: 153 Sai Bag Colony, Indore, MP</p>
      </div>

      {/* Part 2: Categories */}
      <div className="footer-part">
        <h3>Categories</h3>
        <ul className="footer-list">
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>

      {/* Part 4: Resources */}
      <div className="footer-part">
        <h3>Resources</h3>
        <ul className="footer-list">
          {resources.map(({ name, path }, index) => (
            <Link to={path} key={index}>
              <li>{name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
});

export default Footer;
