import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

import './Header.styles.scss';

export const Header: React.FC = () => {
  return (
    <div className="row mb-4">
      <div className="col">
        <Link className="btn header__nav-link" to="/">
          Home
        </Link>
      </div>
      <div className="col">
        <Button label="Login" className="header__btn" />
      </div>
    </div>
  );
};
