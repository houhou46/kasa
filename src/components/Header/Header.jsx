import "./Header.scss";
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={require('../../assets/logo.png')} alt="Kasa logo" />
      </div>
      <div className="navbar__title">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </div>
    </nav>

  );
};








export default Header;