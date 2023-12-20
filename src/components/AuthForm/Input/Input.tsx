interface IProps {
  placeholder: string
}

function Input (props: IProps) {
  return (
    <div className="auth-form__input-wrapper">
      <input type="text" className="auth-form__input" placeholder={props.placeholder} />
    </div>
  )
}

export default Input;