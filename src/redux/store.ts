import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';
import { FETCH_SUCCESS_AUTH, LOGOUT, cookies } from './auth/';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const updateCookies = () => (next) => (action) => {
  if (action.type === FETCH_SUCCESS_AUTH) {
    cookies.set('session_id', action.payload.session_id, {
      path: '/',
      maxAge: 2592000,
    });
  }

  if (action.type === LOGOUT) {
    cookies.remove('session_id');
  }

  return next(action);
};

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, updateCookies))
);
