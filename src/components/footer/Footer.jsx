import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Mausham Bista. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
