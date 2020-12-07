import { combineReducers } from 'redux';

import { moviesReducer } from './movies';
import { filtersReducer } from './filters';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
  auth: authReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
