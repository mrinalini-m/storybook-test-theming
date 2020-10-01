import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <button data-testid="button-component">{children}</button>
);

export default Button;
