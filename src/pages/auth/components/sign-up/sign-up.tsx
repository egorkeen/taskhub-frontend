import logo from '../../../../images/logo.svg';
import AuthForm from '../auth-form/AuthForm';
import ImageInput from '../image-input/ImageInput';
import Input from '../input/Input';
import PasswordInput from '../password-input/PasswordInput';

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