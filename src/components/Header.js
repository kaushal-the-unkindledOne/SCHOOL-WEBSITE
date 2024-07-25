
import React from 'react';
import '../Styles/Header.css';
import logo from '../image/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="School Logo." />
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#academics">Academics</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#faculty">Faculty</a></li>
          <li><a href="#students">Students</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
