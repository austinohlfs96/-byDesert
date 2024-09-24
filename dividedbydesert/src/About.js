import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About the Band</h2>
        <p>
          We are a band that mixes 70s-style country and rock with modern influences to create something truly unique. Formed in 2024 by David Lunbeck and Dan Waite, Divided by Desert
          brings together talented musicians including Pete Ohlin (piano, keys), Brian Petry (drums), Chris Bates (backing vocals), and more.
        </p>
        <p>
          Our latest album, <strong>"Stay"</strong>, captures the essence of our sound,
          combining heartfelt lyrics and powerful melodies that transport you back in time while remaining fresh and modern.
        </p>
      </div>
    </section>
  );
};

export default About;
