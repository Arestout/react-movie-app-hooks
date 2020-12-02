import * as actions from '../movies.actions';
import { moviesReducer, IMoviesState } from '../movies.reducer';

import { responseData, errorMessage } from './fetchMovies.test';

let initialState: IMoviesState;

describe('movies reducer', () => {
  beforeEach(() => {
    initialState = {
      isLoading: false,
      movies: [],
      total_pages: null,
      errorMessage: '',
    };
  });

  it('should return initial state by default', () => {
    expect(moviesReducer(void 0, {})).toEqual(initialState);
  });

  it('should set loading to true', () => {
    expect(moviesReducer(void 0, actions.fetchMoviesStart())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should update the moviesList and set loading to false', () => {
    expect(
      moviesReducer(void 0, actions.fetchMoviesSuccess(responseData))
    ).toEqual({
      isLoading: false,
      movies: responseData.results,
      total_pages: responseData.total_pages,
      errorMessage: '',
    });
  });

  it('should update the error message and set loading to false', () => {
    expect(
      moviesReducer(void 0, actions.fetchMoviesFailure(errorMessage))
    ).toEqual({
      ...initialState,
      errorMessage: 'something went wrong',
      isLoading: false,
    });
  });
});
