import React from 'react';
import './navbar.css'; // Import the CSS file here

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        {/* Hamburger for small screens */}
        <button className="hamburger">
        </button>
        {/* Brand name for small screens */}
        <h1 className="brand-name">
          <span className="brand-highlight">EdDic</span> Dashboard
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
