import * as types from './movies.types';
import { ThunkAction } from 'redux-thunk';

import type { RootStateType } from 'reduxApp/rootReducer';

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
  moviesData: types.IMoviesResponse
): types.MoviesActionTypes => ({
  type: types.FETCH_MOVIES_SUCCESS,
  payload: moviesData,
});

export const fetchMoviesFailure = (
  errorMessage: string
): types.MoviesActionTypes => ({
  type: types.FETCH_MOVIES_FAILURE,
  payload: errorMessage,
});

export const fetchMovies = (
  queryStringParams: types.IMoviesParams
): ThunkType => async (dispatch) => {
  try {
    dispatch(fetchMoviesStart());
    const response = await CallApi.get('/discover/movie', {
      params: queryStringParams,
    });
    const { total_pages, results } = response;
    dispatch(fetchMoviesSuccess({ total_pages, results }));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};
