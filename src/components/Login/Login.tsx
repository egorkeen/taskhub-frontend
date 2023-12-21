import AuthForm from "../AuthForm/AuthForm";
import logo from "../../images/logo.svg";
import PasswordInput from "../AuthForm/PasswordInput/PasswordInput";
import Input from "../AuthForm/Input/Input";

function Login() {
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

export default Login;