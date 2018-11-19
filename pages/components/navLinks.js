import React from 'react';
import styled from 'styled-components';

// UI
import Container from './container';
import Header from '../ui/header';
import theme from '../ui/styles/theme';

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #f1f1f1;
`;

const Alink = styled.a`
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;

  &:hover {
    background-color: #555;
    color: white;
  }
`;

export default ({items}) => (
  <NavList>
    { items.map(([label = 'label', route = '/']) => (
        <li><Alink href={route}>{label}</Alink></li>
      ))
    }
  </NavList>
);