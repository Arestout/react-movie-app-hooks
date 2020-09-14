import React from 'react';

import 'components/Buttons/Buttons.styles.scss';

interface IButton {
  label: string;
  className: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = (props) => {
  const { label, className, disabled, onClick } = props;
  return (
    <button
      type="button"
      className={`btn ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
