import React from 'react';

import './Button.styles.scss';

interface ButtonProps {
  label: string;
  className: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { label, className } = props;
  return <button className={`btn ${className}`}>{label}</button>;
};