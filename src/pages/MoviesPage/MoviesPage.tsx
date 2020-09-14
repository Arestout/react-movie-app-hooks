import React, { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import { useFetchMovies } from './hooks/useFetchMovies';
import { Filters } from './components/Filters';

import './MoviesPage.styles.scss';

interface ITarget {
  target: {
    name: string;
    value: string | Array<string | number>;
  };
}

interface IFilters {
  sort_by: string;
  year: string;
  with_genres: Array<string>;
}

interface IPagesData {
  page: number;
  total_pages: number | null;
}

const initialFilters: IFilters = {
  sort_by: 'popularity.desc',
  year: 'default',
  with_genres: [],
};

const initialPagesData: IPagesData = {
  page: 1,
  total_pages: null,
};

export const MoviesPage: React.FC = () => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);
  const [pagesData, setPagesData] = useState<IPagesData>(initialPagesData);
  const { page, total_pages } = pagesData;

  const onChangeFilters = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | ITarget
  ) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const onChangePagination = ({ page, total_pages }: IPagesData) => {
    setPagesData({
      page,
      total_pages,
    });
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setPagesData(initialPagesData);
  };

  const { isLoading, errorMessage, movies } = useFetchMovies({ filters, page });

  return (
    <div className="row">
      <aside className="filters col-4">
        <div className="filters__wrapper">
          <h3 className="filters__title">Filters</h3>
          <Filters
            filters={filters}
            onChangeFilters={onChangeFilters}
            page={page}
            total_pages={total_pages}
            onChangePagination={onChangePagination}
            resetFilters={resetFilters}
          />
        </div>
      </aside>
      <main className="col-8">
        {isLoading && <p>Loading...</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <MoviesList
          filters={filters}
          movies={movies}
          onChangePagination={onChangePagination}
          page={page}
        />
      </main>
    </div>
  );
};
