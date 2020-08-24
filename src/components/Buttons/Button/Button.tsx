import React from 'react';

import 'components/Buttons/Buttons.styles.scss';

interface ButtonProps {
  label: string;
  className: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { label, className } = props;
  return <button className={`btn ${className}`}>{label}</button>;
};
