import "./Header.scss";
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/"><img src={require('../../assets/logo.png')} alt="Kasa logo" /></NavLink>
      </div>
      <div className="navbar__title">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </div>
    </nav>

  );
};








export default Header;