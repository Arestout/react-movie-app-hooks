import { combineReducers, createStore } from 'redux';

import { moviesReducer } from './movies/movies.reducer';

import { store } from './store';

const referenceRootReducer = combineReducers({
  movies: moviesReducer,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
  it('should have valid state shape', () => {
    expect(store.getState()).toEqual(referenceStore.getState());
  });
});
