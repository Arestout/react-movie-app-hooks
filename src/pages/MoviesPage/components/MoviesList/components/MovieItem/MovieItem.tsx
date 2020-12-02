import React from 'react';
import { Link } from 'react-router-dom';

import GradeSharpIcon from '@material-ui/icons/GradeSharp';

import { Image } from 'components/Image';
import { IMovie } from 'reduxApp/movies/movies.types';
import { MovieFavoriteIcon } from 'components/buttons/MovieFavoriteIcon';
import { MovieWatchlistIcon } from 'components/buttons/MovieWatchlistIcon';

import './MovieItem.styles.scss';

interface IMovieItem {
  movie: IMovie;
}

export const MovieItem: React.FC<IMovieItem> = ({ movie }) => {
  const imagePath = movie.backdrop_path || movie.image_path;

  return (
    <div className="movie-item">
      <Image
        className="card-img-top card-img--height"
        imagePath={imagePath ? imagePath : 'j91XDQPq9spZHias8PpwVdlDxna.jpg'}
        alt={movie.title}
      />
      <div className="container movie-item__info-box">
        <div className="row">
          <div className="col-8">
            <p className="movie-item__title">
              <Link className="card-title" to={`/movie/${movie.id}`}>
                {movie.title}
              </Link>
            </p>
            <div className="movie-item__rating-box">
              <GradeSharpIcon style={{ color: '#d27d00', fontSize: 18 }} />{' '}
              <p className="movie-item__rating">{movie.vote_average}</p>
            </div>
          </div>
          <div className="col-4 movie-item__button-box">
            <MovieFavoriteIcon />
            <MovieWatchlistIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
