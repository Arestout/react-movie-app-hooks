import { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { RootStateType } from 'reduxApp/rootReducer';
import { IAuthState } from 'reduxApp/auth/auth.reducer';
import * as authActions from 'reduxApp/auth/auth.actions';

interface ReturnType {
  auth: IAuthState;
  dispatchLoginModal: () => void;
  dispatchUpdateAuth: (userData) => void;
  dispatchLogOut: () => void;
  dispatchFetchAuth: (sessionId: string) => void;
  dispatchFetchFavoriteMovies: ({ user, session_id }) => void;
  dispatchFetchWatchListMovies: ({ user, session_id }) => void;
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
    (userData) => dispatch(authActions.updateAuth(userData)),
    [dispatch]
  );

  const dispatchLogOut = useCallback(() => dispatch(authActions.onLogOut()), [
    dispatch,
  ]);

  const dispatchFetchAuth = useCallback(
    (session_id: string) => dispatch(authActions.fetchAuth(session_id)),
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
    dispatchFetchFavoriteMovies,
    dispatchFetchWatchListMovies,
  };
};
