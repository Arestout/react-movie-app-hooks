import { useEffect, useMemo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { fetchMovies } from 'reduxApp/movies/movies.actions';
import { RootStateType } from 'reduxApp/rootReducer';
import { IMoviesState } from 'reduxApp/movies/movies.reducer';

interface IUseFetchMovies {
  page: number;
  filters: IFilters;
}

interface IFilters {
  sort_by: string;
  year: string;
  with_genres: Array<string>;
}

export const useFetchMovies = (props: IUseFetchMovies): IMoviesState => {
  const dispatch = useDispatch();
  const { filters, page } = props;

  const { movies, isLoading, errorMessage } = useSelector<
    RootStateType,
    IMoviesState
  >((state: RootStateType) => state.movies, shallowEqual);

  const { sort_by, year, with_genres } = filters;
  const queryStringParams = useMemo(
    () => ({
      language: 'en-US',
      sort_by,
      page,
      year,
      with_genres: '',
    }),
    // eslint-disable-next-line
    [page, sort_by, year, with_genres]
  );
  if (with_genres.length > 0) {
    queryStringParams.with_genres = with_genres.join(',');
  }

  useEffect(() => {
    dispatch(fetchMovies(queryStringParams));
  }, [dispatch, queryStringParams]);

  return {
    isLoading,
    errorMessage,
    movies,
  };
};
