import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import { API_URL, API_KEY_3 } from 'api/api';

interface IuseChangeGenres {
  onChangeFilters: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | ITarget
  ) => void;
  with_genres: Array<string>;
}

interface ReturnType {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  genres: Array<IGenre>;
  with_genres: Array<string>;
}

interface IGenre {
  id: number;
  name: string;
}

interface ITarget {
  target: {
    name: string;
    value: Array<string | number>;
  };
}

export const useChangeGenres = (props: IuseChangeGenres): ReturnType => {
  const { onChangeFilters, with_genres } = props;
  const [genres, setGenres] = useState<Array<IGenre>>([]);

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

  const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=en-US&`;

  useEffect(() => {
    axios.get(link).then(({ data }: AxiosResponse) => setGenres(data.genres));
  }, []);

  return {
    genres,
    with_genres,
    onChange,
  };
};

// interface IreturnedGenres {
//   genres: Array<IGenre>;
// }
