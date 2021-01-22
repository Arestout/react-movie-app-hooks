import React, { ChangeEvent, FocusEvent } from 'react';
import classNames from 'classnames';

import './UIInput.styles.scss';

interface IPropTypes {
  type: string;
  name: string;
  id: string;
  value: string;
  placeholder: string;
  labelText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  error: string;
  className?: string;
  classNameLabel?: string;
}

export const UIInput: React.FC<IPropTypes> = (props) => {
  const {
    type,
    id,
    name,
    value,
    onChange,
    placeholder,
    onBlur,
    labelText,
    error,
    className,
    classNameLabel,
  } = props;

  const getClassForInput = (error: string) =>
    classNames('form-control', className, { invalid: error });

  return (
    <div className="form-group">
      <label className={classNameLabel} htmlFor={id}>
        {labelText}
      </label>
      <input
        type={type}
        className={getClassForInput(error)}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value || ''}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className="error-feedback">{error}</div>}
    </div>
  );
};
