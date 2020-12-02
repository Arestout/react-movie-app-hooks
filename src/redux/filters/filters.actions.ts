import * as types from './filters.types';
import { ThunkAction } from 'redux-thunk';

import type { RootStateType } from 'reduxApp/rootReducer';

import { CallApi } from 'api/api';

export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  types.FiltersActionTypes
>;

export const fetchGenresStart = (): types.FiltersActionTypes => ({
  type: types.FETCH_GENRES_START,
});

export const fetchGenresSuccess = (
  genres: types.Genres
): types.FiltersActionTypes => ({
  type: types.FETCH_GENRES_SUCCESS,
  payload: genres,
});

export const fetchGenresFailure = (
  errorMessage: string
): types.FiltersActionTypes => ({
  type: types.FETCH_GENRES_FAILURE,
  payload: errorMessage,
});

export const changeFiltersAction = (
  event: types.IEvent
): types.FiltersActionTypes => ({
  type: types.CHANGE_FILTERS,
  payload: event,
});

export const changePaginationAction = (
  pagination: types.IPagesData
): types.FiltersActionTypes => ({
  type: types.CHANGE_PAGINATION,
  payload: pagination,
});

export const resetFiltersAction = (): types.FiltersActionTypes => ({
  type: types.RESET_FILTERS,
});

export const fetchGenres = (): ThunkType => async (dispatch) => {
  try {
    dispatch(fetchGenresStart());
    const response = await CallApi.get(`/genre/movie/list`);
    dispatch(fetchGenresSuccess(response.genres));
  } catch (error) {
    dispatch(fetchGenresFailure(error.message));
  }
};
