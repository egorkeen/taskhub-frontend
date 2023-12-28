import { useState } from "react";

interface PasswordInputProps {
  placeholder: string,
}

function PasswordInput (props: PasswordInputProps) {
  const [isVisible, setVisible] = useState(false);

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
        className={`auth-form__password-button ${isVisible ? "auth-form__password-button_visible" : 'auth-form__password-button_hidden'}`}
        onClick={handlePasswordButtonClick} 
      />
    </div>
  );
};

export default PasswordInput;