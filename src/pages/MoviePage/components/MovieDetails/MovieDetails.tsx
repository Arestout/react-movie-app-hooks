import React from 'react';

import './MovieDetails.styles.scss';

const getReleaseDate = (releaseDate) =>
  new Date(releaseDate).toLocaleDateString();

const getFormattedAmount = (amount: number) =>
  amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const getMappedItems = (items) => items.map((item) => item.name).join(', ');

const getLanguage = (language: string) =>
  language === 'en' ? 'English' : language;

export const MovieDetails: React.FC = ({ movie }) => {
  return movie ? (
    <div className="container mt-3 movie-details">
      <div className="row mb-3">
        <div className="col-4 bold">Status</div>
        <div className="col-8">{movie.status}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 bold">Release date</div>
        <div className="col-8">{getReleaseDate(movie.release_date)}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 bold">Runtime</div>
        <div className="col-8">{movie.runtime} Minutes</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 bold">Original Language</div>
        <div className="col-8">{getLanguage(movie.original_language)}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 bold">Production Countries</div>
        <div className="col-8">
          {movie.production_countries &&
            getMappedItems(movie.production_countries)}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4 bold">Budget</div>
        <div className="col-8">
          {movie.budget && getFormattedAmount(movie.budget)} $
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4 bold">Revenue</div>
        <div className="col-8">
          {movie && movie.revenue && getFormattedAmount(movie.revenue)} $
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4 bold">Production companies</div>
        <div className="col-8">
          {movie.production_companies &&
            getMappedItems(movie.production_companies)}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4 bold">Genres</div>
        <div className="col-8">
          {movie.genres && getMappedItems(movie.genres)}
        </div>
      </div>
    </div>
  ) : (
    <p></p>
  );
};
