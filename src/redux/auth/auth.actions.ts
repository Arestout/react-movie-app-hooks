import * as types from './auth.types';
import { CallApi } from 'api/api';
import { Movies } from 'reduxApp/movies/movies.types';
import { ThunkAction } from 'redux-thunk';
import type { RootStateType } from 'reduxApp/rootReducer';

export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  types.AuthActionTypes
>;

export const fetchAuth = (session_id: string): ThunkType => (dispatch) => {
  dispatch({
    type: types.FETCH_REQUEST_AUTH,
  });
  CallApi.get('/account', {
    params: {
      session_id,
    },
  })
    .then((user) => {
      dispatch(updateAuth({ user, session_id }));
      dispatch(fetchFavoriteMovies({ user, session_id }));
      dispatch(fetchWatchListMovies({ user, session_id }));
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_ERROR_AUTH,
        payload: error,
      });
    });
};

export const updateAuth = ({
  user,
  session_id,
}: types.IAuthData): types.AuthActionTypes => ({
  type: types.FETCH_SUCCESS_AUTH,
  payload: {
    user,
    session_id,
  },
});

export const fetchFavoriteMovies = ({
  user,
  session_id,
}: types.IAuthData): ThunkType => (dispatch) => {
  CallApi.get(`/account/${user.id}/favorite/movies`, {
    params: {
      session_id: session_id,
    },
  }).then((data) => {
    dispatch(updateFavoriteMovies(data.results));
  });
};

export const fetchWatchListMovies = ({
  user,
  session_id,
}: types.IAuthData): ThunkType => (dispatch) => {
  CallApi.get(`/account/${user.id}/watchlist/movies`, {
    params: {
      session_id: session_id,
    },
  }).then((data) => {
    dispatch(updateWatchListMovies(data.results));
  });
};

export const onLogOut = (): types.AuthActionTypes => {
  return {
    type: types.LOGOUT,
  };
};

export const toggleLoginModal = (): types.AuthActionTypes => {
  return {
    type: types.TOGGLE_LOGIN_MODAL,
  };
};

export const updateFavoriteMovies = (
  favoriteMovies: Movies
): types.AuthActionTypes => {
  return {
    type: types.UPDATE_FAVORITE_MOVIES,
    payload: favoriteMovies,
  };
};

export const updateWatchListMovies = (
  watchListMovies: Movies
): types.AuthActionTypes => {
  return {
    type: types.UPDATE_WATCH_LIST_MOVIES,
    payload: watchListMovies,
  };
};
