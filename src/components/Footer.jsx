import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-logo'>
        <img src={require('../assets/whitekasa.png')} alt="Kasa white logo" />
      </div>
      <p>©2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;