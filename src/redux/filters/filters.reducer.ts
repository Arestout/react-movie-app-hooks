import * as types from './filters.types';

export interface IFiltersState {
  isLoading: boolean;
  errorMessage: string;
  sort_by: string;
  year: string;
  genres: types.Genres;
  with_genres: Array<string>;
  page: number;
}

const initialState: IFiltersState = {
  isLoading: false,
  errorMessage: '',
  sort_by: 'popularity.desc',
  year: 'default',
  genres: [],
  with_genres: [],
  page: 1,
};

// eslint-disable-next-line
const neverReached = (_never: never) => {}; 

export const filtersReducer = (
  state = initialState,
  action: types.FiltersActionTypes
): IFiltersState => {
  switch (action.type) {
    case types.FETCH_GENRES_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        isLoading: false,
      };
    case types.FETCH_GENRES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case types.CHANGE_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
    case types.CHANGE_PAGINATION:
      return {
        ...state,
        page: action.payload.page,
      };
    case types.RESET_FILTERS:
      return {
        ...state,
        sort_by: 'popularity.desc',
        year: 'default',
        with_genres: [],
        page: 1,
      };

    default:
      neverReached(action);
  }
  return state;
};
