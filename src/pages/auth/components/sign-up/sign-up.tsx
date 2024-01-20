// components
import AuthForm from '../auth-form/auth-form';
import Input from '../input/input';
import ImageInput from '../image-input/image-input';
import PasswordInput from '../password-input/password-input';
// images
import logo from '@images/logo.svg';

function SignUp () {
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

export default SignUp;