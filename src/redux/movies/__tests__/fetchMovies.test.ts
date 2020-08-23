import { CallApi } from 'api/api';
import * as actions from '../movies.actions';

import { responseData, movies } from '../mockData';

jest.mock('api/api');
const apiMock = CallApi as jest.Mocked<typeof CallApi>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

describe('fetchMovies thunk action', () => {
  beforeEach(() => {
    dispatchMock.mockClear();
  });

  it('with success', async () => {
    apiMock.get.mockReturnValue(Promise.resolve(responseData));

    await actions.fetchMovies()(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.fetchMoviesStart());
    expect(dispatchMock).toHaveBeenNthCalledWith(
      2,
      actions.fetchMoviesSuccess(movies)
    );
  });

  // test('with error', async () => {
  //   apiMock.get.mockReturnValue(Promise.resolve(reultOnError));

  //   await actions.fetchMovies()(dispatchMock);

  //   expect(dispatchMock).toBeCalledTimes(2);
  //   expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.fetchMoviesStart());
  //   expect(dispatchMock).toHaveBeenNthCalledWith(
  //     2,
  //     actions.fetchMoviesFailure(errorMessage)
  //   );
  // });
});
