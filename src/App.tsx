import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { Header } from './components/Header/Header';
import { MoviesPage } from './pages/MoviesPage';
import { MoviePage } from 'pages/MoviePage';
import { LoginModal } from './components/Header/Login/LoginModal';
import { useAuth } from 'hooks/useAuth';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

import './App.styles.scss';

export const App: React.FC = () => {
  const {
    auth,
    dispatchFetchAuth,
    dispatchFetchWatchListMovies,
    dispatchFetchFavoriteMovies,
  } = useAuth();

  useEffect(() => {
    if (auth.session_id) {
      dispatchFetchAuth(auth.session_id);
    }
  }, [auth.session_id, dispatchFetchAuth]);

  useEffect(() => {
    if (auth.user && auth.session_id) {
      dispatchFetchWatchListMovies({
        user: auth.user,
        session_id: auth.session_id,
      });
      dispatchFetchFavoriteMovies({
        user: auth.user,
        session_id: auth.session_id,
      });
    }
  }, [
    auth.user,
    auth.session_id,
    dispatchFetchFavoriteMovies,
    dispatchFetchWatchListMovies,
  ]);

  return auth.isAuth || !auth.session_id ? (
    <div className="container">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header />
        <Switch>
          <Route exact path="/" component={MoviesPage} />
          <Route path="/movie/:id/" component={MoviePage} />
          <Route>
            <ErrorMessage errorMessage="404. Page not found" />
          </Route>
        </Switch>
        <LoginModal />
      </ErrorBoundary>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

function ErrorFallback({ error }: FallbackProps) {
  return (
    <div className="error-fallback-wrapper">
      <div className="error-fallback" role="alert">
        <p>Something went wrong:</p>
        <p>{error.message}</p>
        <p>Please refresh the page and try again.</p>
      </div>
    </div>
  );
}
