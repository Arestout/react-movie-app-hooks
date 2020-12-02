import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import { Header } from './components/Header/Header';
import { MoviesPage } from './pages/MoviesPage';
import { MoviePage } from 'pages/MoviePage';

export const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Route exact path="/" component={MoviesPage} />
      <Route path="/movie/:id/" component={MoviePage} />
    </div>
  );
};
