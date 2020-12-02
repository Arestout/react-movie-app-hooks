import { CallApi } from 'api/api';
import * as actions from '../movies.actions';

jest.mock('api/api');
const apiMock = CallApi as jest.Mocked<typeof CallApi>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

const params = {
  sort_by: 'popularity.desc',
  year: 'default',
  with_genres: [],
  page: 1,
  language: 'en',
};

export const movies = [
  {
    adult: false,
    backdrop_path: '/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg',
    genre_ids: [28, 80, 878],
    id: 605116,
    original_language: 'en',
    original_title: 'Project Power',
    overview:
      'An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.',
    popularity: 262.964,
    poster_path: '/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg',
    release_date: '2020-08-14',
    title: 'Project Power',
    video: false,
    vote_average: 6.7,
    vote_count: 625,
  },
];

export const errorMessage = 'something went wrong';

export const responseData = {
  results: movies,
  total_pages: 500,
};

describe('Movies: fetchMovies thunk action', () => {
  beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    apiMock.get.mockClear();
  });

  it('with success', async () => {
    apiMock.get.mockResolvedValue(responseData);

    await actions.fetchMovies(params)(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.fetchMoviesStart());
    // expect(dispatchMock).toHaveBeenNthCalledWith(
    //   2,
    //   actions.fetchMoviesSuccess(responseData)
    // );
  });

  // test('with error', async () => {
  //   apiMock.get.mockReturnValue(Promise.resolve(reultOnError));

  //   await actions.fetchMovies()(dispatchMock);

  //   expect(dispatchMock).toBeCalledTimes(2);
  //   expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.fetchMoviesStart());
  //   expect(dispatchMock).toHaveBeenNthCalledWith(
  //     2,
  //     actions.fetchMoviesFailure(errorMessage)
  //   );   нам нужно будет с тобой обсудить какие данные и как
  // });
});
