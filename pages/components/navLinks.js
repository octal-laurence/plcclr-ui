import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'next/router';

// UI
import theme from '../ui/styles/theme';
import routeLinks from '../../routes';

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: ${theme.colors.primary};
`;

const Alink = styled.a`
  display: block;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  ${p => (p.active) && `
    color: #000;
    background-color: #f1f1f1;
  `}

  &:hover {
    color: #000;
    border-style: groove;
  }
`;

export default withRouter(({router={}}) => (
  <NavList>
    { Object.entries(routeLinks())
      .filter(([route, data]) => data.hasOwnProperty(`navLinks`))
      .map(([route, data], i) => (
        <li key={i}>
          <Alink
            href={route}
            active={router.asPath === route}
          >
            {data.navLinks}
          </Alink>
        </li>
      ))
    }
  </NavList>
));