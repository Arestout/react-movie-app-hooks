import { combineReducers } from 'redux';

import { moviesReducer } from './movies';
import { filtersReducer } from './filters';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
