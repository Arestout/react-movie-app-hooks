import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import './Genres.styles.scss';

import { API_URL, API_KEY_3 } from 'api/api';

interface IGenres {
  onChangeFilters: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | ITarget
  ) => void;
  with_genres: Array<string>;
}

interface ITarget {
  target: {
    name: string;
    value: string | Array<string | number>;
  };
}

interface IGenre {
  id: number;
  name: string;
}

export const Genres: React.FC<IGenres> = (props) => {
  const { onChangeFilters, with_genres } = props;
  const [genres, setGenres] = useState<Array<IGenre>>([]);
  const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=en-US&`;

  useEffect(() => {
    axios.get(link).then(({ data }: AxiosResponse) => setGenres(data.genres));
  }, [link]);

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
      {genres.map((genre) => (
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
