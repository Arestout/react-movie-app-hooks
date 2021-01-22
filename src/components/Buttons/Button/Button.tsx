import React from 'react';

import 'components/Buttons/Buttons.styles.scss';

interface IButton {
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  className: string;
  disabled?: boolean;
  onClick?: (() => void) | ((e: React.FormEvent<HTMLButtonElement>) => void);
}

export const Button: React.FC<IButton> = (props) => {
  const { label, className, type, disabled, onClick } = props;

  return (
    <button
      type={type}
      className={`btn ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
