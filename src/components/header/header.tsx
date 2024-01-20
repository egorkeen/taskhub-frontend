import { Link } from "react-router-dom";
// images
import logo from '@images/logo.svg';
import profileButton from '@images/header/header__profile-button.svg';

function Header() {
  return (
    <header className="header">
      <Link to="/boards">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <Link to="/profile">
        <img src={profileButton} alt="Профиль" className="header__profile-button" />
      </Link>
    </header>
  );
};

export default Header;