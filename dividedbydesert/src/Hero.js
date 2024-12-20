import React from 'react';
import './Hero.css';
import MusicPlayer from './MusicPlayer';

const Hero = () => {
  return (
    <section className="hero-section">
     <div class="hero-content">
      <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
      <h2 style={{marginTop: "20px", fontFamily: "Roboto Condensed"}}>DEBUT ALBUM OUT NOW!</h2> 
    <div class="hero-image-container">
      <div class="hero-image hero-image-front">
        <img src="Stay.jpg" alt="Front Image"/>
      </div>
      <div class="hero-image hero-image-back">
        <img src="Band.jpg" alt="Back Image"/>
      </div>
      {/* <div className="hero-image hero-image-third">
          <img src="DbDicon.jpg" alt="Logo" />
    </div> */}
    </div>
    {/* <h2>NEW ALBUM COMING SOON</h2>  */}

    </div>

        {/* Music Player Section with 3D effect */}
        <div className="hero-music-player">
          <div className="music-player-box">
          <h2 style={{ fontFamily: "Roboto Condensed"}}>LISTEN TO </h2> <h2><strong>"STAY"</strong></h2> <h2></h2>
        <MusicPlayer />
        <h2 style={{ fontFamily: "Roboto Condensed"}}>THE TITLE TRACK OFF OUR NEW ALBUM!</h2> 
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
