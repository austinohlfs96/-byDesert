import React from 'react';
import './Music.css';

const Music = () => {
  return (
    <section className="music-section">
      <h2>Our Music</h2>
      <div className="music-videos">
        <div className="video-container">
          <h3>The River</h3>
          <iframe
            src="https://www.youtube.com/embed/AQhCi8jP7gk"
            title="The River"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <h3>Rain</h3>
          <iframe
            src="https://www.youtube.com/embed/zO8m6UBLg-s"
            title="Rain"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Browse Merch Button with Redirect */}
      <button
        className="newsletter-button"
        style={{ marginTop: '30px' }}
        onClick={() => window.location.href = 'https://www.teepublic.com/t-shirt/66626347-divided-by-desert?store_id=3576138'} // Redirect link here
      >
        Browse Our Merch
      </button>
    </section>
  );
};

export default Music;
