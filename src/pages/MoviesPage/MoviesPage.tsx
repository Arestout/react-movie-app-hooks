import React from 'react';

import { MoviesList } from './components/MoviesList';
import { useFetchMovies } from './hooks/useFetchMovies';

export const MoviesPage: React.FC = () => {
  const { movies } = useFetchMovies();

  return (
    <div className="row">
      <aside className="col-4">
        <h3>Filters:</h3>
      </aside>
      <main className="col-8">
        <MoviesList movies={movies} />
      </main>
    </div>
  );
};
