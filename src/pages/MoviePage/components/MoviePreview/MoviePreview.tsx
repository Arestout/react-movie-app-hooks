import React from 'react';

import { MovieFavoriteIcon } from 'components/buttons/MovieFavoriteIcon';
import { MovieWatchlistIcon } from 'components/buttons/MovieWatchlistIcon';
import { Image } from 'components/Image';
import { useWatchList } from 'hooks/useWatchList';
import { useFavorite } from 'hooks/useFavorite';
import { IMovie } from 'reduxApp/movies/movies.types';

import './MoviePreview.styles.scss';

interface IMoviePreview {
  movie: IMovie;
}

export const MoviePreview: React.FC<IMoviePreview> = ({ movie }) => {
  const imagePath = movie?.poster_path || movie?.backdrop_path;

  const {
    isLoadingWatchList,
    handleClickWatchList,
    isInWatchList,
  } = useWatchList(movie);

  const { isLoadingFavorite, handleClickFavorite, isFavorite } = useFavorite(
    movie
  );

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
        <h2 className="title mb-4 movie-preview__title">{movie.title}</h2>
        <p className="mb-4 movie-preview__overview">{movie.overview}</p>

        <div className="movie-preview__social-wrapper">
          <p className="mb-4 movie-preview__overview">
            Rating: {movie.vote_average}
          </p>

          <div className="movie-preview__social">
            <MovieFavoriteIcon
              onClick={handleClickFavorite}
              isLoading={isLoadingFavorite}
              isFavorite={isFavorite}
            />
            <MovieWatchlistIcon
              onClick={handleClickWatchList}
              isLoading={isLoadingWatchList}
              isWatchList={isInWatchList}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p></p>
  );
};
