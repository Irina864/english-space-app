import { forwardRef } from 'react';
import './ImageButton.css';

const ImageButton = forwardRef(
  ({ theme, src, alt, onClick, disabled }, ref) => (
    <button
      className={`imagebtn ${theme}`}
      onClick={onClick}
      ref={ref}
      disabled={disabled}
    >
      <div className="imagebtn__imagewrap">
        <img
          className="imagebtn__image"
          src={src}
          alt={alt}
          disabled={disabled}
        />
      </div>
    </button>
  )
);

export default ImageButton;
