import React from 'react';

const Header = () => {
    return (
      <header className="header">
        <div className="header-logo">
        <img src={require('../assets/logo.png')} alt="Kasa logo" />
        </div>
        <nav className="header-nav">
        <ul>
          <li>Accueil</li>
          <li>A Propos</li>
        </ul>
      </nav>
    </header>
  );
};








export default Header;