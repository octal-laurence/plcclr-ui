import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(({
  activeOpacity,
  block,
  centered,
  color,
  display,
  marginBottom,
  marginRight,
  muted,
  inheritColor,
  textAlign,
  ...otherProps
}) => <RRLink {...otherProps} />).attrs({
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
  display: props => (props.block ? 'block' : 'inline'),
  marginBottom: props => (props.marginBottom ? props.marginBottom : props.theme.padding.md),
  marginRight: props => (props.block ? 0 : props.theme.margin.md),
  opacity: props => (props.muted ? 0.7 : 1),
})`
  align-self: ${props => (props.block ? 'initial' : 'flex-start')};
  color: ${props => props.color};
  display: ${props => props.display};
  opacity: ${props => props.opacity};
  text-align: ${props => props.textAlign || 'left'};
  text-decoration: none;

  &:active {
    opacity: ${props => props.activeOpacity};
  }

  &:not(:last-child) {
    margin-bottom: ${props => props.marginBottom};
    margin-right: ${props => props.marginRight};
  }
`;

export default Link;
