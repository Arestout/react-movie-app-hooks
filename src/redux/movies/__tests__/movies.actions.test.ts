import * as actions from '../movies.actions';
import * as types from '../movies.types';

import { movies, errorMessage } from '../mockData';

describe('movies actions:', () => {
  it('start fetching movies', () => {
    expect(actions.fetchMoviesStart()).toEqual({
      type: types.FETCH_MOVIES_START,
    });
  });

  it('update movies', () => {
    expect(actions.fetchMoviesSuccess(movies)).toEqual({
      type: types.FETCH_MOVIES_SUCCESS,
      payload: movies,
    });
  });

  it('update error message on failure', () => {
    expect(actions.fetchMoviesFailure(errorMessage)).toEqual({
      type: types.FETCH_MOVIES_FAILURE,
      payload: errorMessage,
    });
  });
});
