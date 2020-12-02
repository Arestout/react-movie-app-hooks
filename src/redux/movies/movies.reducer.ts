import * as types from './movies.types';

export interface IMoviesState {
  isLoading: boolean;
  movies: types.Movies;
  total_pages: number | null;
  errorMessage: string;
}

const initialState: IMoviesState = {
  isLoading: false,
  movies: [],
  total_pages: null,
  errorMessage: '',
};

// eslint-disable-next-line
const neverReached = (_never: never) => {}; 

export const moviesReducer = (
  state = initialState,
  action: types.MoviesActionTypes
): IMoviesState => {
  switch (action.type) {
    case types.FETCH_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.results,
        total_pages: action.payload.total_pages,
        isLoading: false,
      };
    case types.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    default:
      neverReached(action);
  }
  return state;
};
