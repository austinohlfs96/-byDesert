import React from 'react';
import { FaSpotify, FaYoutube, FaAmazon } from 'react-icons/fa';
import './Album.css';

const AlbumTease = () => {
  return (
    <section className="album-tease">
      <div className="album-content">
        <div className="album-text">
          <h2 style={{textAlign: 'center'}}>Debut Album Out Now!</h2>
          <p>
            Divided by Desert's debut album has arrived! Featuring 14 original tracks, this album showcases the band's unique blend of rock and country, drawing inspiration from the open roads of the American West.
          </p>
          <h4 style={{textDecoration: 'underline'}}>Featured Tracks:</h4>
          <ul>
            <li><strong>Stay</strong> – A heartfelt journey through love and loss.</li>
            <li><strong>The River</strong> – A soulful anthem that takes you through the highs and lows of life.</li>
            <li><strong>Wickenburg Stomp</strong> – A toe-tapping, upbeat track featuring Chuck Barnard on guitar.</li>
            <li><strong>Love Hasn’t Died</strong> – A powerful ballad that speaks to the enduring power of love.</li>
          </ul>

          {/* Streaming Platform Links with React Icons */}
        </div>
        <div className="album-image">
          <img src="/AlbumBack.jpg" alt="Divided by Desert Album Back Cover" />
        </div>
        
      </div>
      <div style={{display: 'flex', alignContent: "center", flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
      <h4 style={{textDecoration: 'underline', marginTop: '20px', fontSize: "xx-large"}}>Listen on:</h4>
          <div className="streaming-links">
            <a href="https://open.spotify.com/album/0IE2VnuE79KWy99godDUgc?si=vu0ew0nbR12Oh_9yNEoHYQ" target="_blank" rel="noopener noreferrer">
              <FaSpotify className="icon" style={{color: "black",  fontSize: "xx-large"}}/>
            </a>
            <a href="https://music.apple.com/us/album/YOUR_APPLE_MUSIC_ALBUM_ID" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="icon" style={{color: "black",  fontSize: "xx-large"}}/>
            </a>
            <a href="https://music.amazon.com/artists/B0DK49ZSNX/divided-by-desert" target="_blank" rel="noopener noreferrer">
              <FaAmazon className="icon" style={{color: "black",  fontSize: "xx-large"}}/>
            </a>
          </div>
      </div>
    </section>
  );
};

export default AlbumTease;
