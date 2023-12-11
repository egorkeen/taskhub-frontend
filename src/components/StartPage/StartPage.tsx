import start__logo from '../../images/start/start__logo.svg';

function StartPage() {
  return (
    <section className="start">
      <div className="start__container">
        <img src={start__logo} className="start__logo" />
        <h2 className="start__title">Организуйте работу и жизнь!</h2>
        <p className="start__paragraph">Cписок дел, который поможет вам обрести концентрацию, организованность и покой.</p>
        <button className="start__login-button">Войти</button>
        <button className="start__register-button">Зарегистрироваться</button>
      </div>
    </section>
  );
};

export default StartPage;