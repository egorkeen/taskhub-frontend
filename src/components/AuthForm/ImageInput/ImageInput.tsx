import { ChangeEvent, useRef, useState } from "react";
import image_input from '../../../images/auth-form/auth-form__image-input.svg';

function ImageInput () {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
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
          src={selectedImage || image_input} 
          className={`${selectedImage ? 'image-input__image_selected': 'image-input__image'}`} 
          alt="Выбрать аватар"
        />
      </div>
    </div>
  );
};

export default ImageInput;