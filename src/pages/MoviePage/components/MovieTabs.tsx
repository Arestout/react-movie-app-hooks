import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

const Tabs: React.FC<RouteComponentProps> = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;

  return (
    <Nav tabs>
      <NavItem>
        <NavLink to={`/movie/${id}/details`} className="nav-link">
          Details
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={`/movie/${id}/videos`} className="nav-link">
          Videos
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={`/movie/${id}/credits`} className="nav-link">
          Credits
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export const MovieTabs = withRouter(Tabs);
