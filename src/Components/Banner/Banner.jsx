import React from 'react';
import { FaBook, FaLaptopCode, FaPen, FaGlobe } from 'react-icons/fa';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-section">
      {/* Left Section */}
      <div className="banner-content">
        <h1 className="banner-heading">Unlock Your Web Development Potential</h1>
        <h2 className="banner-subheading">Access High-Quality Resources for Free</h2>

        <div className="banner-features">
          <div className="banner-feature">
            <FaBook className="banner-icon" />
            <h3 className="banner-feature-title">PDF Notes</h3>
            <p>Comprehensive web development notes available for download.</p>
          </div>
          <div className="banner-feature">
            <FaLaptopCode className="banner-icon" />
            <h3 className="banner-feature-title">Video Lectures</h3>
            <p>Learn through detailed video lectures covering various topics.</p>
          </div>
          <div className="banner-feature">
            <FaPen className="banner-icon" />
            <h3 className="banner-feature-title">Blogs</h3>
            <p>Read our insightful blogs to stay updated with the latest trends.</p>
          </div>
          <div className="banner-feature">
            <FaGlobe className="banner-icon" />
            <h3 className="banner-feature-title">Community Support</h3>
            <p>Join a community of learners and get your questions answered.</p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Banner;
