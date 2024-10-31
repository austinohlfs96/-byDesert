import React from 'react';
import { FaFacebook, FaSpotify, FaYoutube, FaAmazon } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#music">Music</a>
          <a 
            onClick={() => window.location.href = 'https://www.redbubble.com/people/TheFuturePassed/shop?asc=u'}  
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security when opening a new tab
          >
            Shop
          </a>
          <a href="#members">Members</a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61564069377059" aria-label="Facebook">
            <FaFacebook size={24} style={{margiLeft: '10px', marginRight: '10px'}}/>
          </a>
          <a href="https://open.spotify.com/artist/3Te3Fakg8uKlnkkb5BYjLk" target="_blank" rel="noopener noreferrer">
              <FaSpotify className="icon" style={{color: "#3be477", margiLeft: '10px', marginRight: '10px'}}/>
            </a>
            <a href="https://https://www.youtube.com/channel/UCbdGDbjUGmnq65jjbvQQs0g" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="icon" style={{color: "red", margiLeft: '10px', marginRight: '10px'}}/>
            </a>
            <a href="https://music.amazon.com/artists/B0DK49ZSNX/divided-by-desert" target="_blank" rel="noopener noreferrer">
              <FaAmazon className="icon" style={{ margiLeft: '10px', marginRight: '10px'}}/>
            </a>
        </div>
        <p className="copyright">
          &copy; 2024 Divided by Desert
        </p>
        <p>
          Website Designed by <a href="https://austin-ohlfs.onrender.com/" target="_blank" style={{textDecoration: 'underline'}}>Austin Ohlfs</a>
          </p>
      </div>
      <img src='DbyDlogo.png' style={{height: '40px', marginTop: '10px'}}/>
    </footer>
  );
};

export default Footer;
