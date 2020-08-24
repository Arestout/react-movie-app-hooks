import { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { fetchMovies } from 'reduxApp/movies/movies.actions';
import { RootStateType } from 'reduxApp/rootReducer';
import { IMoviesState } from 'reduxApp/movies/movies.reducer';

export const useFetchMovies = (): IMoviesState => {
  const dispatch = useDispatch();

  const { movies, isLoading, errorMessage } = useSelector<
    RootStateType,
    IMoviesState
  >((state: RootStateType) => state.movies, shallowEqual);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return {
    isLoading,
    errorMessage,
    movies,
  };
};
