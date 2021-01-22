import { Movies } from 'reduxApp/movies/movies.types';

export interface IUser {
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: null | string;
    };
  };
  id: number;
  include_adult: boolean;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  username: string;
}

export interface IAuthData {
  user: IUser;
  session_id: string;
}

export interface IUserAuth {
  username: string;
  password: string;
}

export const UPDATE_AUTH = 'UPDATE_AUTH';
export type UpdateAuthAction = {
  type: typeof UPDATE_AUTH;
  payload: IAuthData;
};

export const LOGOUT = 'LOGOUT';
export type LogoutAction = {
  type: typeof LOGOUT;
};

export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
export type ToggleLoginModalAction = {
  type: typeof TOGGLE_LOGIN_MODAL;
};

export const FETCH_REQUEST_AUTH = 'FETCH_REQUEST_AUTH';
export type FetchRequestAuthAction = {
  type: typeof FETCH_REQUEST_AUTH;
};

export const FETCH_SUCCESS_AUTH = 'FETCH_SUCCESS_AUTH';
export type FetchSuccessAuthAction = {
  type: typeof FETCH_SUCCESS_AUTH;
  payload: IAuthData;
};

export const FETCH_ERROR_AUTH = 'FETCH_ERROR_AUTH';
export type FetchErrorAuthAction = {
  type: typeof FETCH_ERROR_AUTH;
};

export const UPDATE_FAVORITE_MOVIES = 'UPDATE_FAVORITE_MOVIES';
export type UpdateFavoriteMoviesAction = {
  type: typeof UPDATE_FAVORITE_MOVIES;
  payload: Movies;
};

export const UPDATE_WATCH_LIST_MOVIES = 'UPDATE_WATCH_LIST_MOVIES';
export type UpdateWatchListMoviesAction = {
  type: typeof UPDATE_WATCH_LIST_MOVIES;
  payload: Movies;
};

export type AuthActionTypes =
  | UpdateAuthAction
  | LogoutAction
  | ToggleLoginModalAction
  | FetchRequestAuthAction
  | FetchSuccessAuthAction
  | FetchErrorAuthAction
  | UpdateFavoriteMoviesAction
  | UpdateWatchListMoviesAction;
