import React from 'react';

import { FormSelect } from 'components/Form/FormSelect';

const options = [
  { label: 'Popular Descending', value: 'popularity.desc' },
  { label: 'Popular Ascending', value: 'popularity.asc' },
  { label: 'Rating Descending', value: 'vote_average.desc' },
  { label: 'Rating Ascending', value: 'vote_average.asc' },
];

interface ISortBy {
  onChangeFilters: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | ITarget
  ) => void;
  sort_by: string;
}

interface ITarget {
  target: {
    name: string;
    value: string | Array<string | number>;
  };
}

export const SortBy: React.FC<ISortBy> = (props) => {
  const { onChangeFilters, sort_by } = props;

  return (
    <FormSelect
      id="sort_by"
      name="sort_by"
      value={sort_by}
      onChange={onChangeFilters}
      labelText={'Sort by:'}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </FormSelect>
  );
};
