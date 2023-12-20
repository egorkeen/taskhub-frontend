import logo from '../../images/start/start__logo.svg';
import AuthForm from '../AuthForm/AuthForm';
import ImageInput from '../AuthForm/ImageInput/ImageInput';
import Input from '../AuthForm/Input/Input';
import PasswordInput from '../AuthForm/PasswordInput/PasswordInput';

function Register () {
  return (
    <section className="register">
      <img className="register__logo" src={logo} alt="Логотип"/>
      <AuthForm
        title='Регистрация'
        submitButtonText='Зарегистрироваться'
        linkPath='/sign-in'
        spanText='Уже зарегистрированы?'
        linkText='Вход'
      >
        <ImageInput />
        <div className='auth-form__inputs'>
          <Input placeholder='Введите ваш ник или email' />
          <PasswordInput placeholder="Введите пароль" />
          <PasswordInput placeholder="Подтвердите пароль" />
        </div>
      </AuthForm>
    </section>
  );
};

export default Register;