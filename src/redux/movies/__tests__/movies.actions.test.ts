import * as actions from '../movies.actions';
import * as types from '../movies.types';

import { responseData, errorMessage } from './fetchMovies.test';

describe('movies actions:', () => {
  it('start fetching movies', () => {
    expect(actions.fetchMoviesStart()).toEqual({
      type: types.FETCH_MOVIES_START,
    });
  });

  it('update movies', () => {
    expect(actions.fetchMoviesSuccess(responseData)).toEqual({
      type: types.FETCH_MOVIES_SUCCESS,
      payload: responseData,
    });
  });

  it('update error message on failure', () => {
    expect(actions.fetchMoviesFailure(errorMessage)).toEqual({
      type: types.FETCH_MOVIES_FAILURE,
      payload: errorMessage,
    });
  });
});
