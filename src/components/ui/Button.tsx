import React from 'react';
import { Link } from '@/i18n/navigation';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLink?: boolean;
  href?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  isLink = false,
  href = '#',
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold text-white rounded-sm transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-primary-500 hover:bg-blue-800',
    secondary: 'bg-information-500 hover:bg-blue-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-2.5',
  };

  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];
  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
    </>
  );

  if (isLink) {
    return (
      <Link className={combinedClassName} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} disabled={disabled} type="button" {...props}>
      {content}
    </button>
  );
};

export default Button;
