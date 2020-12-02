import React from 'react';
import { MovieFavoriteIcon } from 'components/buttons/MovieFavoriteIcon';
import { MovieWatchlistIcon } from 'components/buttons/MovieWatchlistIcon';
import { Image } from 'components/Image';

export const MoviePreview: React.FC = ({ movie }) => {
  const imagePath = movie?.poster_path || movie?.backdrop_path;

  return movie ? (
    <div className="row ml-5 mt-5">
      <div className="col-4">
        <Image
          className="rounded movie-page-image"
          imagePath={imagePath}
          alt={movie.title}
        />
      </div>
      <div className="col-8">
        <h2 className="title mb-4">{movie.title}</h2>
        <p className="mb-4">{movie.overview}</p>
        <p className="mb-4">Rating: {movie.vote_average}</p>
        <div className="card-body">
          <MovieFavoriteIcon />
          <MovieWatchlistIcon />
        </div>
      </div>
    </div>
  ) : (
    <p></p>
  );
};
