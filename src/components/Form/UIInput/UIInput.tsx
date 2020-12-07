import React, { ChangeEvent, FocusEvent } from 'react';
import classNames from 'classnames';

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
}

export const UIInput: React.FC<IPropTypes> = (props) => {
  const getClassForInput = (error: string) =>
    classNames('form-control', { invalid: error });

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
  } = props;

  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        className={getClassForInput(error)}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
