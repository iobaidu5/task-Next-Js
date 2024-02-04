import React from 'react';

interface ButtonProps {
  className: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <a href="#" className={className}>
      {children}
    </a>
  );
};

export default Button;
