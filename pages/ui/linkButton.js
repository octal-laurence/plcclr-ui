import React from 'react';
import styled from 'styled-components';

const LinkButton = styled(({
  activeOpacity,
  color,
  marginBottom,
  marginRight,
  opacity,
  ...otherProps
}) => <button {...otherProps} />).attrs({
  activeOpacity: props => (props.muted ? 0.4 : 0.7),
  color: (props) => {
    if (props.inheritColor) {
      return 'inherit';
    }

    if (props.color) {
      return props.color;
    }

    return props.theme.colors.primary;
  },
  marginBottom: props => props.theme.padding.md,
  marginRight: props => (props.inline ? props.theme.margin.md : 0),
  opacity: props => (props.muted ? 0.7 : 1),
})`
  align-self: flex-start;
  background: none;
  border: none;
  border-radius: 0;
  color: ${props => props.color};
  font-size: inherit;
  opacity: ${props => props.opacity};
  outline: none;
  padding: 0;

  &:active {
    opacity: ${props => props.activeOpacity};
  }

  &:not(:last-child) {
    margin-bottom: ${props => props.marginBottom};
    margin-right: ${props => props.marginRight};
  }

  &:hover {
    cursor: pointer;
  }
`;

export default LinkButton;
