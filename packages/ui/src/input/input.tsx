import { InputHTMLAttributes } from 'react';
import SearchIcon from '../svg/search.svg';
import { inputVariant, inputContainerStyle, inputStyle } from './input.css';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  variant?: 'search' | 'default';
}

const Input = ({ variant = 'default', className, ...props }: InputProps) => {
  return (
    <div
      className={`${inputContainerStyle} ${inputVariant[variant]} ${className}`}>
      {variant === 'search' && <SearchIcon />}
      <input {...props} className={inputStyle} />
    </div>
  );
};

export default Input;
