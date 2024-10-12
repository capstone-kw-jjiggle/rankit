import { ButtonHTMLAttributes } from 'react';
import { buttonStyle, colorVariant, paragraphStyle } from './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary';
  size?: 'lg' | 'sm';
  color?: 'primary' | 'secondary';
}

const Button = ({
  variant = 'primary',
  size = 'lg',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${buttonStyle[size]} ${colorVariant[variant]}`}
      {...props}>
      <p className={paragraphStyle[size]}>{children}</p>
    </button>
  );
};

export default Button;
