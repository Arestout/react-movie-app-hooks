import React from 'react';

interface IFormSelect {
  id: string;
  name: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void | ITarget;
  labelText: string;
}

interface ITarget {
  target: {
    name: string;
    value: string | Array<string | number>;
  };
}

export const FormSelect: React.FC<IFormSelect> = (props) => {
  const { id, name, value, onChange, labelText, children } = props;

  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <select
        id={id}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
};
