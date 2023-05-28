import React from 'react';
import './footer.css';
import photo from '../../img/linkedin.png'
import photo1 from '../../img/github.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Mausham Bista. All rights reserved.
          </p>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/mausham-bista/">
            <img src={photo} alt="" className='link'/>
          </a>
          <a href="https://github.com/Mausham07">
            <img src={photo1} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
