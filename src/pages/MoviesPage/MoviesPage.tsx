import React from 'react';

import { MoviesList } from './components/MoviesList';
import { useFetchMovies } from './hooks/useFetchMovies';
import { Filters } from './components/Filters';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title> Movie List - My Movie App</title>
        <meta name="description" content="List of all movies" />
      </Helmet>
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
