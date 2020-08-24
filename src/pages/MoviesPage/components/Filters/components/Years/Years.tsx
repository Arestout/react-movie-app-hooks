import React from 'react';

import { FormSelect } from 'components/Form/FormSelect';

interface IYears {
  year: string;
  onChangeFilters: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | ITarget
  ) => void;
}

interface ITarget {
  target: {
    name: string;
    value: string | Array<string | number>;
  };
}

const getYears = () =>
  Array.from(new Array(30), (_, index) => new Date().getFullYear() - index);

export const Years: React.FC<IYears> = (props) => {
  const { onChangeFilters, year } = props;

  const years = getYears();

  return (
    <FormSelect
      id="year"
      name="year"
      value={year}
      onChange={onChangeFilters}
      labelText="Sort by Release Year:"
    >
      <option key="default" value="">
        All
      </option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </FormSelect>
  );
};
