import React, { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import { useFetchMovies } from './hooks/useFetchMovies';
import { Filters } from './components/Filters';

const initialFilters = {
  sort_by: 'popularity.desc',
  year: 'default',
  with_genres: [],
};

interface ITarget {
  target: {
    name: string;
    value: string | Array<string | number>;
  };
}

export const MoviesPage: React.FC = () => {
  const { movies } = useFetchMovies();
  const [filters, setFilters] = useState(initialFilters);

  const onChangeFilters = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | ITarget
  ) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="row">
      <aside className="col-4">
        <h3>Filters:</h3>
        <Filters filters={filters} onChangeFilters={onChangeFilters} />
      </aside>
      <main className="col-8">
        <MoviesList filters={filters} movies={movies} />
      </main>
    </div>
  );
};
