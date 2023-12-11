import { Link } from "react-router-dom";
import header__logo from '../../images/header__logo.svg';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={header__logo} alt="Логотип" />
      </Link>
    </header>
  );
};

export default Header;