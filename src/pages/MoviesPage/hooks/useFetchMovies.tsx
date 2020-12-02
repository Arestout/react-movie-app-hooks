import { useEffect, useMemo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { fetchMovies, IMoviesState, Movies } from 'reduxApp/movies/';
import { RootStateType } from 'reduxApp/rootReducer';

interface IUseFetchMovies {
  movies: Movies;
}

interface IQueryStringParams {
  language: string;
  sort_by: string;
  page: number;
  year: string;
  with_genres: Array<string> | string;
}

export const useFetchMovies = (): IUseFetchMovies => {
  const dispatch = useDispatch();

  const { movies } = useSelector<RootStateType, IMoviesState>(
    (state: RootStateType) => state.movies,
    shallowEqual
  );

  const { sort_by, year, with_genres, page } = useSelector(
    (state: RootStateType) => state.filters
  );
  const queryStringParams: IQueryStringParams = useMemo(
    () => ({
      language: 'en-US',
      sort_by,
      page,
      year,
      with_genres,
    }),
    [page, sort_by, year, with_genres]
  );
  if (with_genres.length > 0) {
    queryStringParams.with_genres = with_genres.join(',');
  }

  useEffect(() => {
    dispatch(fetchMovies(queryStringParams));
  }, [dispatch, queryStringParams]);

  return {
    movies,
  };
};
