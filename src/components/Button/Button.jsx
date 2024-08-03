import './Button.css';
import { forwardRef } from 'react';

const Button = forwardRef(({ theme, nameButton, onClick, disabled }, ref) => (
  <button
    className={`btn ${theme}`}
    onClick={onClick}
    ref={ref}
    disabled={disabled}
  >
    {nameButton}
  </button>
));

export default Button;
