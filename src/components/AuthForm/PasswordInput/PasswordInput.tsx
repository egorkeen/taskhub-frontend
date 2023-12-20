import { useState } from "react";

interface IProps {
  placeholder: string,
}

function PasswordInput (props: IProps) {
  const [isVisible, setVisible] = useState(false);
  const [password, setPassword] = useState('')

  function handlePasswordButtonClick () {
    setVisible(!isVisible);
  }

  return (
    <div className="auth-form__input-wrapper">
      <input 
        type={ isVisible ? "text" : "password" } 
        className="auth-form__input" 
        placeholder={props.placeholder}
      >
    </input>
    <button
        type="button" 
        className={`auth-form__paswword-button ${isVisible ? "auth-form__password-button_visible" : 'auth-form__password-button_hidden'}`}
        onClick={handlePasswordButtonClick} 
      />
    </div>
  );
};

export default PasswordInput;