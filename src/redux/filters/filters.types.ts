interface IGenre {
  id: number;
  name: string;
}

export interface ITarget {
  target: {
    name: string;
    value: string | Array<string | number>;
  };
}

export interface IEvent {
  [key: string]: string | (string | number)[];
}

export type Genres = Array<IGenre>;

export interface IPagesData {
  page: number;
}

export const FETCH_GENRES_START = 'FETCH_GENRES_START';
export type FetchGenresStartAction = {
  type: typeof FETCH_GENRES_START;
};

export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export type FetchGenresSuccessAction = {
  type: typeof FETCH_GENRES_SUCCESS;
  payload: Genres;
};

export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';
export type FetchGenresFailureAction = {
  type: typeof FETCH_GENRES_FAILURE;
  payload: string;
};

export const CHANGE_FILTERS = 'CHANGE_FILTERS';
export type ChangeFiltersAction = {
  type: typeof CHANGE_FILTERS;
  payload: IEvent;
};

export const CHANGE_PAGINATION = 'CHANGE_PAGINATION';
export type ChangePaginationAction = {
  type: typeof CHANGE_PAGINATION;
  payload: IPagesData;
};

export const RESET_FILTERS = 'RESET_FILTERS';
export type ResetFiltersAction = {
  type: typeof RESET_FILTERS;
};

export type FiltersActionTypes =
  | FetchGenresStartAction
  | FetchGenresSuccessAction
  | FetchGenresFailureAction
  | ChangeFiltersAction
  | ChangePaginationAction
  | ResetFiltersAction;
