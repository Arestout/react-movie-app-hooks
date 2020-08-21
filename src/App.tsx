import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';

import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
};
