import { Link } from "react-router-dom";
import logo from '@images/logo.svg';

function StartPage() {
  return (
    <section className="start">
      <div className="start__container">
        <img src={logo} className="start__logo" alt="Логотип"/>
        <h2 className="start__title">Организуйте работу и жизнь!</h2>
        <p className="start__paragraph">Cписок дел, который поможет вам обрести концентрацию, организованность и покой.</p>
        <Link to="/sign-in" className="start__login-button">Войти</Link>
        <Link to="/sign-up" className="start__register-button">Зарегистрироваться</Link>
      </div>
    </section>
  );
}

export default StartPage;