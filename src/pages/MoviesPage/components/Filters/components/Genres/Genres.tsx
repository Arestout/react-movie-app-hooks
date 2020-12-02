import React from 'react';
import { useSelector } from 'react-redux';

import { useFetchGenres } from 'pages/MoviesPage/hooks';

import './Genres.styles.scss';
import { RootStateType } from 'reduxApp/rootReducer';

interface IGenres {
  onChangeFilters: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | ITarget
  ) => void;
}

interface ITarget {
  target: {
    name: string;
    value: string | Array<string | number>;
  };
}

export const Genres: React.FC<IGenres> = (props) => {
  const { genres } = useFetchGenres();
  const { with_genres, isLoading } = useSelector(
    (state: RootStateType) => state.filters
  );
  const { onChangeFilters } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFilters({
      target: {
        name: 'with_genres',
        value: event.target.checked
          ? [...with_genres, event.target.value]
          : with_genres.filter((genre: string) => genre !== event.target.value),
      },
    });
  };

  return (
    <div className="genres">
      {!isLoading &&
        genres.map((genre) => (
          <div className="genres__checkbox-wrapper form-check" key={genre.id}>
            <input
              className="form-check-input"
              type="checkbox"
              id={genre.name}
              name={genre.name}
              checked={with_genres.includes(String(genre.id))}
              value={genre.id}
              onChange={onChange}
            />
            <label
              className="genres__label form-check-label"
              htmlFor={genre.name}
            >
              {genre.name}
            </label>
          </div>
        ))}
    </div>
  );
};
