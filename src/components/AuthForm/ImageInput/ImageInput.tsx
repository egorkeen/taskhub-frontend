import { ChangeEvent, useRef } from "react";
import image_input from '../../../images/auth-form/auth-form__image-input.svg';

function ImageInput () {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      console.log('Выбранное изображение:', selectedFile);
    }
  };
  
  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="image-input__wrapper">
      <input 
        className="image-input__input" 
        type="file"
        onChange={handleFileUpload}
        ref={fileInputRef}
        accept=".jpg, .jpeg, .png" 
      />
      <div className="image-input__background" onClick={openFileInput}>
        <img  
          src={image_input} 
          className="image-input__image" 
          alt="Выбрать аватар"
        />
      </div>
    </div>
  );
};

export default ImageInput;