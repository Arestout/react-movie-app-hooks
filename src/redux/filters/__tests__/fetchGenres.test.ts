import { CallApi } from 'api/api';
import * as actions from '../filters.actions';

jest.mock('api/api');
const apiMock = CallApi as jest.Mocked<typeof CallApi>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

const genres = {
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
  ],
};

describe('Filters: fetchGenres thunk action', () => {
  beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    apiMock.get.mockClear();
  });

  it('with success', async () => {
    apiMock.get.mockResolvedValue(genres);

    await actions.fetchGenres()(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.fetchGenresStart());
    expect(dispatchMock).toHaveBeenNthCalledWith(
      2,
      actions.fetchGenresSuccess(genres.genres)
    );
  });
});
