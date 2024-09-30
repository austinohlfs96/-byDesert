import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href=".App">Home</a>
          <a href="#about">About</a>
          <a href="#music">Music</a>
          <a href="#members">Members</a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61564069377059" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          {/* <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter size={24} />
          </a> */}
        </div>
        <p className="copyright">
          &copy; 2024 Divided by Desert
        </p>
        <p>
          Website Designed by <a href="https://austin-ohlfs.onrender.com/" target="_blank" style={{textDecoration: 'underline'}}>Austin Ohlfs</a>
          </p>
      </div>
    </footer>
  );
};

export default Footer;
