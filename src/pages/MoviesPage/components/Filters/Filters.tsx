import React from 'react';
import { SortBy } from './components/SortBy';
import { Pagination } from './components/Pagination';
import { Genres } from './components/Genres';
import { Years } from './components/Years';

interface IPagesData {
  page: number;
  total_pages: number | null;
}

interface IFilters {
  filters: {
    sort_by: string;
    year: string;
    with_genres: Array<string>;
  };
  onChangeFilters: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | ITarget
  ) => void;
  page: number;
  total_pages: number | null;
  onChangePagination: ({ page, total_pages }: IPagesData) => void;
  resetFilters: () => void;
}

interface ITarget {
  target: {
    name: string;
    value: string | Array<string | number>;
  };
}

export const Filters: React.FC<IFilters> = (props) => {
  const {
    onChangeFilters,
    onChangePagination,
    filters: { sort_by, year, with_genres },
    page,
    total_pages,
    resetFilters,
  } = props;

  return (
    <form className="mb-3">
      <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />

      <Years year={year} onChangeFilters={onChangeFilters} />

      <Genres with_genres={with_genres} onChangeFilters={onChangeFilters} />

      <Pagination
        page={page}
        total_pages={total_pages}
        onChangePagination={onChangePagination}
        resetFilters={resetFilters}
      />
    </form>
  );
};
