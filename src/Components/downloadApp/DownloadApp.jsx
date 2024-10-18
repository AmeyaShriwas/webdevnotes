import React from 'react';
import './DownloadApp.css'; // Import the CSS file
import ph1 from './../../Assets/ph1.png';
import ph2 from './../../Assets/ph2.png';
import { FaGooglePlay } from 'react-icons/fa';

const DownloadApp = () => {
  return (
    <div className="download-app-container">
      {/* Left Section */}
      <div className="download-app-left">
        <h1>Get the learning app</h1>
        <p className="sub-heading">
          Download lessons and learn anytime, anywhere with WebDevNotes.
        </p>
        <div className="playstore">
          <FaGooglePlay className="playstore-icon" />
          <span>Download on Play Store</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="download-app-right">
        <img loading="lazy"  src={ph1} alt="App screenshot 1" className="phone-image" />
        <img loading="lazy"  src={ph2} alt="App screenshot 2" className="phone-image" />
      </div>
    </div>
  );
};

export default DownloadApp;
