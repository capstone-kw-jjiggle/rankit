import { forwardRef, InputHTMLAttributes } from 'react';
import SearchLargeIcon from '@/shared/assets/svg/search_lg.svg';
import SearchSmallIcon from '@/shared/assets/svg/search_sm.svg';
import {
  inputContainerStyle,
  inputStyle,
  inputPaddingDefaultStyle,
  inputPaddingSearchStyle,
} from './input.css';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  device?: 'desktop' | 'mobile';
  variant?: 'search' | 'default';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ device = 'desktop', variant = 'default', className, ...props }, ref) => {
    const SearchIcon = device === 'desktop' ? SearchLargeIcon : SearchSmallIcon;

    return (
      <div
        className={`${inputContainerStyle[device]} ${
          variant === 'default'
            ? inputPaddingDefaultStyle[device]
            : inputPaddingSearchStyle[device]
        } ${className}`}>
        {variant === 'search' && <SearchIcon />}
        <input ref={ref} {...props} className={inputStyle} />{' '}
      </div>
    );
  },
);

Input.displayName = 'Input'; //

export default Input;
