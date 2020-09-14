import * as types from './movies.types';
import { ThunkAction } from 'redux-thunk';

import type { RootStateType } from 'redux/rootReducer';

import { CallApi } from 'api/api';

export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  types.MoviesActionTypes
>;

export const fetchMoviesStart = (): types.MoviesActionTypes => ({
  type: types.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (
  movies: types.Movies
): types.MoviesActionTypes => ({
  type: types.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (
  errorMessage: string
): types.MoviesActionTypes => ({
  type: types.FETCH_MOVIES_FAILURE,
  payload: errorMessage,
});

export const fetchMovies = (
  queryStringParams: types.IMoviesParams
): ThunkType => (dispatch) => {
  dispatch(fetchMoviesStart());
  CallApi.get('/discover/movie', {
    params: queryStringParams,
  })
    .then((response) => {
      dispatch(fetchMoviesSuccess(response.results));
    })
    .catch((error) => {
      dispatch(fetchMoviesFailure(error.message));
    });
};
