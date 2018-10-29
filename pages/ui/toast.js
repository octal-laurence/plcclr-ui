import React from 'react';
import styled from 'styled-components';

const Toast = styled(({
  backgroundColor,
  color,
  type,
  ...otherProps
}) => <p {...otherProps} />).attrs({
  backgroundColor: (props) => {
    switch (props.type) {
      case 'error':
        return props.theme.colors.red;
      default:
        return props.theme.colors.primaryLight;
    }
  },
  color: (props) => {
    switch (props.type) {
      case 'error':
        return props.theme.colors.white;
      default:
        return props.theme.colors.black;
    }
  },
})`
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.theme.misc.borderRadius};
  color: ${props => props.color};
  margin: 0 0 ${props => props.theme.margin.md};
  padding: ${props => props.theme.padding.sm};
`;

export default Toast;
