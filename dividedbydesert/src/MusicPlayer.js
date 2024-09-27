import React, { useRef, useState, useEffect } from "react";
import "./MusicPlayer.css";

const MediaPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div id="boxes">
      <div id="player03" className="player horizontal">
        <div className="wrapper">
          <div className="info-wrapper">
            <img src="Stay.jpg" alt="LogoMusicImage" />

            <div className="info">
              <h1>Stay</h1>
              <p>Divided By Desert</p>
            </div>
          </div>
          <div className="track">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>

          <div className="controls">
            <div className="play" onClick={handlePlayPause}>
              {isPlaying ? (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 25h4V5h-4v20zm6-20v20h4V5h-4z"
                    fill="#E1E1E6"
                  />
                </svg>
              ) : (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.32137 25.586C7.9759 25.5853 7.63655 25.4948 7.33669 25.3232C6.66148 24.9406 6.24173 24.1978 6.24173 23.3915V7.07398C6.24173 6.26542 6.66148 5.52494 7.33669 5.14232C7.64369 4.96589 7.99244 4.87516 8.3465 4.87961C8.70056 4.88407 9.04692 4.98354 9.34938 5.16764L23.2952 13.5155C23.5859 13.6977 23.8255 13.9508 23.9916 14.251C24.1577 14.5511 24.2448 14.8886 24.2448 15.2316C24.2448 15.5747 24.1577 15.9121 23.9916 16.2123C23.8255 16.5125 23.5859 16.7655 23.2952 16.9478L9.34713 25.2979C9.0376 25.485 8.68307 25.5846 8.32137 25.586V25.586Z"
                    fill="#E1E1E6"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Add the audio element here */}
          <audio ref={audioRef} src="/stay.wav" />

          {/* Progress bar */}
          
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
