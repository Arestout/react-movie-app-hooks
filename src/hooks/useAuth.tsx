import { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { RootStateType } from 'reduxApp/rootReducer';
import { IAuthState } from 'reduxApp/auth/auth.reducer';
import * as authActions from 'reduxApp/auth/auth.actions';
import * as types from 'reduxApp/auth/auth.types';

interface ReturnType {
  auth: IAuthState;
  dispatchLoginModal: () => void;
  dispatchUpdateAuth: ({ user, session_id }: types.IAuthData) => void;
  dispatchLogOut: () => void;
  dispatchFetchAuth: (session_id: string) => void;
  dispatchFetchAuthOnLogin: ({ username, password }: types.IUserAuth) => void;
  dispatchFetchFavoriteMovies: ({ user, session_id }: types.IAuthData) => void;
  dispatchFetchWatchListMovies: ({ user, session_id }: types.IAuthData) => void;
}

export const useAuth = (): ReturnType => {
  const auth = useSelector<RootStateType, IAuthState>(
    (state: RootStateType) => state.auth,
    shallowEqual
  );

  const dispatch = useDispatch();

  const dispatchLoginModal = useCallback(
    () => dispatch(authActions.toggleLoginModal()),
    [dispatch]
  );

  const dispatchUpdateAuth = useCallback(
    ({ user, session_id }) =>
      dispatch(authActions.updateAuth({ user, session_id })),
    [dispatch]
  );

  const dispatchLogOut = useCallback(() => dispatch(authActions.onLogOut()), [
    dispatch,
  ]);

  const dispatchFetchAuth = useCallback(
    (session_id: string) => {
      dispatch(authActions.fetchRequestAuth());
      dispatch(authActions.fetchAuth(session_id));
    },
    [dispatch]
  );

  const dispatchFetchAuthOnLogin = useCallback(
    ({ username, password }) => {
      dispatch(authActions.fetchRequestAuth());
      dispatch(authActions.fetchAuthOnLogin({ username, password }));
    },
    [dispatch]
  );

  const dispatchFetchFavoriteMovies = useCallback(
    ({ user, session_id }) =>
      dispatch(authActions.fetchFavoriteMovies({ user, session_id })),
    [dispatch]
  );

  const dispatchFetchWatchListMovies = useCallback(
    ({ user, session_id }) =>
      dispatch(authActions.fetchWatchListMovies({ user, session_id })),
    [dispatch]
  );

  return {
    auth,
    dispatchLoginModal,
    dispatchUpdateAuth,
    dispatchLogOut,
    dispatchFetchAuth,
    dispatchFetchAuthOnLogin,
    dispatchFetchFavoriteMovies,
    dispatchFetchWatchListMovies,
  };
};
