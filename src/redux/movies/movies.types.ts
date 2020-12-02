export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  image_path?: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMoviesResponse {
  results: Array<IMovie>;
  total_pages: number;
}

export interface IMoviesParams {
  sort_by: string;
  year: string;
  with_genres: Array<string> | string;
  language: string;
  page: number;
}

export type Movies = Array<IMovie>;

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START';
export type FetchMoviesStartAction = {
  type: typeof FETCH_MOVIES_START;
};

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export type FetchMoviesSuccessAction = {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: {
    results: Movies;
    total_pages: number;
  };
};

export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export type FetchMoviesFailureAction = {
  type: typeof FETCH_MOVIES_FAILURE;
  payload: string;
};

export type MoviesActionTypes =
  | FetchMoviesStartAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailureAction;
