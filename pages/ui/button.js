import React from 'react';
import styled from 'styled-components';

const Button = styled(({
  active,
  block,
  centered,
  display,
  margin,
  ...otherProps
}) => <button {...otherProps} />).attrs({
  display: props => (props.block ? 'block' : 'inline-block'),
  margin: props => (props.centered ? '0 auto' : 'initial'),
})`
  align-self: flex-start;
  background-color: ${props => (props.active ? props.theme.colors.primaryDark : props.theme.colors.primary)};
  border: none;
  border-radius: ${props => props.theme.misc.borderRadius};
  color: ${props => props.theme.colors.white};
  display: ${props => props.display};
  outline: none;
  margin: ${props => props.margin};
  padding: ${props => props.theme.padding.sm} ${props => props.theme.padding.md};
  text-transform: uppercase;

  &:active, &:disabled {
    background-color: ${props => props.theme.colors.primaryLight};
  }

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.padding.sm}
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
