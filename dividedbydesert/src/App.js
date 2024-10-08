import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import About from './About';
import Music from './Music';
import Member from './Member';
import './App.css';
import AlbumTease from './Album';


function App() {
  return (
    <div className="App">
      <div id="hero">
    <Navbar />
    </div>
    <section >
      <Hero />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="music">
      <Music />
    </section>
    <section id="music">
      <AlbumTease />
    </section>
    <section id="members">
      <Member />
    </section>
    <section id="contact">
    <section className="banner-section">
        <img src="PageHeader.jpg" alt="Banner" />
      </section>
      {/* Add your contact form or information here */}
      <Footer />
    </section>
  </div>
  );
}

export default App;
