import React from 'react';
import './FooterSection.css'; // Import the regular CSS file

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <p className="text-lg mb-4">
          &copy; {new Date().getFullYear()} <span className="font-semibold">EdDic</span>. All Rights Reserved.
        </p>
        <div className="link-container">
          <a href="/" className="footer-link">Privacy Policy</a>
          <a href="/" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
