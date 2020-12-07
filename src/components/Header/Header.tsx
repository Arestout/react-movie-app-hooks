import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'components/Buttons/Button';
import { UserMenu } from 'components/Header/UserMenu';
import { useAuth } from 'hooks/useAuth';

import './Header.styles.scss';

export const Header: React.FC = () => {
  const { auth, dispatchLoginModal } = useAuth();

  return (
    <header className="row header">
      <div className="col">
        <Link className="btn header__nav-link" to="/">
          Home
        </Link>
      </div>
      <div className="col">
        {auth.user ? (
          <UserMenu />
        ) : (
          <Button
            type="button"
            label="Login"
            className="header__btn"
            onClick={dispatchLoginModal}
          />
        )}
      </div>
    </header>
  );
};
