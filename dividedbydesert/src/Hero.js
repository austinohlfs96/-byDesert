import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
     <div class="hero-content">
      <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
      <h2>NEW ALBUM COMING SOON!</h2> 
    <div class="hero-image-container">
      <div class="hero-image hero-image-front">
        <img src="Stay.jpg" alt="Front Image"/>
      </div>
      <div class="hero-image hero-image-back">
        <img src="Band.jpg" alt="Back Image"/>
      </div>
      
    </div>
    {/* <h2>NEW ALBUM COMING SOON</h2>  */}

    </div>

        {/* Music Player Section with 3D effect */}
        <div className="hero-music-player">
          <div className="music-player-box">
            <h2>Listen to</h2> <h2><strong>"Stay"</strong></h2> <h2></h2>
            <audio controls>
              <source src="/stay-mastering-v2.wav" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <h2>The title track off our new album!</h2> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
