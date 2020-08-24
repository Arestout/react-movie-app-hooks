import React from 'react';

import { Movies, IMovie } from 'reduxApp/movies/movies.types';
import { MovieItem } from './components/MovieItem';

interface IMoviesList {
  filters: {
    sort_by: string;
    year: string;
    with_genres: Array<string>;
  };
  movies: Movies;
}

export const MoviesList: React.FC<IMoviesList> = ({ movies }) => (
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
