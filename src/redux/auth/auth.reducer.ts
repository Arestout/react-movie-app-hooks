import Cookies from 'universal-cookie';
import * as types from './auth.types';
import { Movies } from 'reduxApp/movies/movies.types';

export const cookies = new Cookies();

export interface IAuthState {
  user: null | types.IUser;
  session_id: string;
  isAuth: boolean;
  showLoginModal: boolean;
  favoriteMovies: Movies;
  watchListMovies: Movies;
}

const initialState: IAuthState = {
  user: null,
  session_id: cookies.get('session_id'),
  isAuth: false,
  showLoginModal: false,
  favoriteMovies: [],
  watchListMovies: [],
};

export const authReducer = (
  state = initialState,
  action: types.AuthActionTypes
): IAuthState => {
  switch (action.type) {
    case types.FETCH_SUCCESS_AUTH:
      return {
        ...state,
        user: action.payload.user,
        session_id: action.payload.session_id,
        isAuth: true,
      };
    case types.LOGOUT:
      return {
        ...initialState,
      };
    case types.TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: !state.showLoginModal,
      };
    case types.UPDATE_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
      };
    case types.UPDATE_WATCH_LIST_MOVIES:
      return {
        ...state,
        watchListMovies: action.payload,
      };
    default:
      return state;
  }
};
