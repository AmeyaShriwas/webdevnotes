import React, { useState } from 'react';
import './VideoReels.css';

const VideoReels = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videos = [
        {
            title: 'Nature Walk - Peaceful Journey',
            url: 'https://www.youtube.com/embed/LSC55i2qJ3s'
        },
        {
            title: 'JavaScript Tutorial for Beginners',
            url: 'https://www.youtube.com/embed/LSC55i2qJ3s'
        },
        {
            title: 'React.js Crash Course',
            url: 'https://www.youtube.com/embed/LSC55i2qJ3s'
        },
        {
            title: 'Best Coding Music for Productivity',
            url: 'https://www.youtube.com/embed/LSC55i2qJ3s'
        }
    ];

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < videos.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="video-reels-wrapper">
            <h1 className="Pcategory-heading">Explore Our Videos</h1>
            <div className="reels-container">
                {/* Show carousel controls only on mobile */}
                <button className="carousel-control prev" onClick={handlePrev}>
                    ‹
                </button>
                <div className="reels-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {videos.map((video, index) => (
                        <div key={index} className="reel">
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
                <button className="carousel-control next" onClick={handleNext}>
                    ›
                </button>
            </div>
            <div className="seeAll">
                <span>See All</span>
            </div>
        </div>
    );
};

export default VideoReels;
