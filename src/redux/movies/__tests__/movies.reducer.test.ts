import * as actions from '../movies.actions';
import { moviesReducer, IMoviesState } from '../movies.reducer';

const initialState: IMoviesState = {
  isLoading: false,
  movies: [],
  errorMessage: '',
};

const movies = [
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

const errorMessage = 'something went wrong';

describe('movies reducer', () => {
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
    expect(moviesReducer(void 0, actions.fetchMoviesSuccess(movies))).toEqual({
      ...initialState,
      movies: movies,
      isLoading: false,
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
