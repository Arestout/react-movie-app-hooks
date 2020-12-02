import { combineReducers, createStore } from 'redux';

import { moviesReducer } from './movies/';
import { filtersReducer } from './filters/';

import { store } from './store';

const referenceRootReducer = combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
  it('should have valid state shape', () => {
    expect(store.getState()).toEqual(referenceStore.getState());
  });
});
