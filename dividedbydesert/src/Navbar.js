import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
       <img src="/DbyDlogo.png" alt="Logo" className="logo-image" style={{height: '60px'}} /> {/* Add your logo path */}
       
      <div className="logo" style={{marginLeft: "-38px"}}>Divided by Desert</div>
      
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70} // Adjust based on your navbar height
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="music"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Music
        </Link>
        <Link
        >
         <a 
            onClick={() => window.location.href = 'https://www.redbubble.com/people/TheFuturePassed/shop?asc=u'}  
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security when opening a new tab
          >
            Shop
          </a>
        </Link>
        <Link
          activeClass="active"
          to="members"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Members
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Newsletter
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
