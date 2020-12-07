import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { CallApi } from 'api/api';
import { useAuth } from 'hooks/useAuth';

import './UserMenu.styles.scss';

export const UserMenu: React.FC = () => {
  const { auth, dispatchLogOut } = useAuth();
  const [dropdownState, setDropdownState] = useState(false);

  const toggleDropdown = () => {
    setDropdownState(!dropdownState);
  };

  const handleLogOut = () => {
    CallApi.delete('/authentication/session', {
      body: {
        session_id: auth.session_id,
      },
    }).then(() => {
      dispatchLogOut();
    });
  };

  return (
    <Dropdown isOpen={dropdownState} toggle={toggleDropdown}>
      <DropdownToggle
        tag="div"
        onClick={toggleDropdown}
        data-toggle="dropdown"
        aria-expanded={dropdownState}
      >
        <img
          width="40"
          className="rounded-circle profile-image"
          src={`https://secure.gravatar.com/avatar/${auth.user.avatar.gravatar.hash}.jpg?s=64"`}
          alt="profile picture"
          onClick={toggleDropdown}
        />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={handleLogOut}>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
