import React from 'react';
import './Banner.css';

const Banner = () => {

  const videos = [
    {
        title: 'Nature Walk - Peaceful Journey',
        url: 'https://www.youtube.com/embed/LSC55i2qJ3s'
    }
];
  return (
    <div className="banner-container">
      {/* Left Section */}
      <div className="banner-left">
        <h1>Learn web development, video lectures, pdf notes, and our blogs</h1>
        <h2>Access high-quality resources for free</h2>

        {/* Phone input container */}
       

        {/* Join Now button (visible only for smaller screens) */}
        <button className="join-button hidden-on-desktop">Join Now</button>
      </div>

      {/* Right Section */}
      <div className="banner-right">
      {videos.map((video, index) => (
                        <div key={index} className="reelBanner">
                            <iframe
                                className="video-frame"
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ))}

      </div>
    </div>
  );
};

export default Banner;
