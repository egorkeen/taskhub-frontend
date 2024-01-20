// components
import AuthForm from "../auth-form/auth-form";
import Input from "../input/input";
import PasswordInput from "../password-input/password-input";
// images
import logo from '@images/logo.svg';

function SignIn() {
  return (
    <section className="login">
      <img className="login__logo" src={logo} alt="Логотип"/>
      <AuthForm 
        title="Вход" 
        submitButtonText="Войти" 
        spanText="Ещё нет аккаунта?" 
        linkPath="/sign-up" 
        linkText="Регистрация"
      >
        <div className="auth-form__inputs">
          <Input placeholder="Введите ваш ник или e-mail" />
          <PasswordInput placeholder="Введите пароль" />
        </div>
      </AuthForm>
    </section>
  );
};

export default SignIn;