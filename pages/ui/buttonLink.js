import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(({
  block,
  centered,
  display,
  margin,
  siblingMargin,
  ...otherProps
}) => <NavLink {...otherProps} />).attrs({
  display: props => (props.block ? 'block' : 'inline-block'),
  margin: props => (props.centered ? '0 auto' : 'initial'),
  siblingMargin: (props) => {
    return props.block ? `0 0 ${props.theme.padding.sm} 0` : `0 ${props.theme.padding.sm} ${props.theme.padding.sm} 0`;
  },
})`
  align-self: flex-start;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: ${props => props.theme.misc.borderRadius};
  color: ${props => props.theme.colors.white};
  display: ${props => props.display};
  outline: none;
  margin: ${props => props.margin};
  padding: ${props => props.theme.padding.sm} ${props => props.theme.padding.md};
  text-decoration: none;
  text-transform: uppercase;

  &:active, &:disabled {
    background-color: ${props => props.theme.colors.primaryLight};
  }

  &:not(:last-child) {
    margin: ${props => props.siblingMargin};
  }

  &:hover {
    cursor: pointer;
  }

  &.active {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

export default Button;
