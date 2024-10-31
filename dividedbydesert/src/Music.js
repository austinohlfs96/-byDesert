import React from 'react';
import './Music.css';

const Music = () => {
  return (
    <section className="music-section">
      <h2>Our Music</h2>
      <div className="music-spotify">
        <iframe
          src="https://open.spotify.com/embed/artist/3Te3Fakg8uKlnkkb5BYjLk" // Replace YOUR_ARTIST_ID with the band's Spotify Artist ID
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          title="Spotify Catalog"
          allowFullScreen
        ></iframe>
      </div>

      {/* Browse Merch Button with Redirect */}
      <button
        className="newsletter-button"
        style={{ marginTop: '30px' }}
        onClick={() => window.location.href = 'https://www.redbubble.com/people/TheFuturePassed/shop?asc=u'}
      >
        Browse Our Merch
      </button>
    </section>
  );
};

export default Music;
