import React, { useState } from "react";
import '../styles/global.css';
import "../styles/home.css";

const VideoContainer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="heading">
        <h1 className="headline">Explore Talentron</h1>
        <p className="subtitle grey-text">Learn Skills with Experienced Trainers</p>
      </div>

      {/* Responsive Video Container */}
      <div className="video-container mb-5">
        {!isPlaying ? (
          <>
            <img
              src="/images/video_img.png"
              alt="Video Thumbnail"
            />
            <div className="play-button" onClick={playVideo}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </>
        ) : (
          <iframe
            id="video"
            src="/videos/5-second-video.mp4?autoplay=1&controls=0"
            allowFullScreen
            title="Talentron Video"
          
          />
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
