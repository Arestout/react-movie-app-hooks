import React, { useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.scss';

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
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={MoviesPage} />
        <Route path="/movie/:id/" component={MoviePage} />
        <LoginModal />
      </BrowserRouter>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
