import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

import './MovieTabs.styles.scss';

const Tabs: React.FC<RouteComponentProps> = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;

  return (
    <Nav tabs>
      <NavItem>
        <NavLink to={`/movie/${id}/details`} className="movie-tab nav-link">
          Details
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={`/movie/${id}/videos`} className="movie-tab nav-link">
          Videos
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={`/movie/${id}/credits`} className="movie-tab nav-link">
          Credits
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export const MovieTabs = withRouter(Tabs);
