import "./Header.scss";

function Header () {
    return (
        <nav className="navbar">
          <div className="navbar__logo">
            <img src={require('../../assets/logo.png')} alt="Kasa logo" />
          </div>
        <div className="navbar__title">
          <p>Accueil</p>
          <p>A Propos</p>
        </div>
      </nav>

  );
};








export default Header;