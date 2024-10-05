import React from 'react';
import './Album.css';


const AlbumTease = () => {
  return (
    <section className="album-tease">
      <div className="album-content">
        <div className="album-text">
          <h2 style={{textAlign: 'center'}}>Debut Album Coming Soon!</h2>
          <p>
            Divided by Desert's highly anticipated debut album is just around the corner! With 14 original tracks, this album captures the band's signature blend of rock and country, inspired by the wide open roads of the American West.
          </p>
          <h4 style={{textDecoration: 'underline'}}>Featured Tracks:</h4>
          <ul>
            <li><strong>Stay</strong> – A heartfelt journey through love and loss.</li>
            <li><strong>The River</strong> – A soulful anthem that takes you through the highs and lows of life.</li>
            <li><strong>Wickenburg Stomp</strong> – A toe-tapping, upbeat track featuring Chuck Barnard on guitar.</li>
            <li><strong>Love Hasn’t Died</strong> – A powerful ballad that speaks to the enduring power of love.</li>
          </ul>
        </div>
        <div className="album-image">
          <img src="/AlbumBack.jpg" alt="Divided by Desert Album Back Cover" />
        </div>
      </div>
    </section>
  );
};

export default AlbumTease;
