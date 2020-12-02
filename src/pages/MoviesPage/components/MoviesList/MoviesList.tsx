import React from 'react';

import { Movies, IMovie } from 'reduxApp/movies/movies.types';
import { MovieItem } from './components/MovieItem';

interface IMoviesList {
  movies: Movies;
  isLoading: boolean;
}

export const MoviesList: React.FC<IMoviesList> = ({ movies, isLoading }) => {
  if (isLoading) return null;
  return (
    <div className="row">
      {movies.length > 0 ? (
        movies.map((movie: IMovie) => {
          return (
            <div key={movie.id} className="col-6 mb-4">
              <MovieItem movie={movie} />
            </div>
          );
        })
      ) : (
        <h3>No results found matching your criteria</h3>
      )}
    </div>
  );
};
