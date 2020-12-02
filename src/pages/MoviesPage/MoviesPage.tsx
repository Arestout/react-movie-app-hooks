import React from 'react';

import { MoviesList } from './components/MoviesList';
import { useFetchMovies } from './hooks/useFetchMovies';
import { Filters } from './components/Filters';

import { useSelector } from 'react-redux';
import { RootStateType } from 'reduxApp/rootReducer';

import './MoviesPage.styles.scss';

export const MoviesPage: React.FC = () => {
  const { isLoading, errorMessage } = useSelector(
    (state: RootStateType) => state.movies
  );
  const { movies } = useFetchMovies();

  return (
    <div className="row">
      <aside className="filters col-4">
        <div className="filters__wrapper">
          <h3 className="filters__title">Filters</h3>
          <Filters />
        </div>
      </aside>
      <main className="col-8">
        {isLoading && <p>Loading...</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <MoviesList movies={movies} isLoading={isLoading} />
      </main>
    </div>
  );
};
