import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { MoviesPage } from './pages/MoviesPage';
import { MoviePage } from 'pages/MoviePage';
import { LoginModal } from './components/Header/Login/LoginModal';
import { useAuth } from 'hooks/useAuth';

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
      <Header />
      <Route exact path="/" component={MoviesPage} />
      <Route path="/movie/:id/" component={MoviePage} />
      <LoginModal />
    </div>
  ) : (
    <p>Loading...</p>
  );
};
