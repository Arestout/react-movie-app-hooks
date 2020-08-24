import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import { Header } from './components/Header/Header';
import { MoviesPage } from './pages/MoviesPage';

export const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Route exact path="/" component={MoviesPage} />
    </div>
  );
};
