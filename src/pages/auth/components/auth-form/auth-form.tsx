import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthFormProps {
  children: ReactNode,
  title: string,
  submitButtonText: string,
  spanText: string,
  linkPath: string,
  linkText: string,
}

function AuthForm(props: AuthFormProps) {
  return (
    <form className="auth-form">
      <h2 className="auth-form__title">{props.title}</h2>
      {props.children}
      <button className="auth-form__submit-button">{props.submitButtonText}</button>
      <span className="auth-form__span">{props.spanText}</span>
      <Link className="auth-form__nav-link" to={props.linkPath}>{props.linkText}</Link>
    </form>
  );
};

export default AuthForm;