import React from 'react';
import styled from 'styled-components';

const Input = styled(({
  block,
  display,
  fullWidth,
  width,
  marginBottom,
  ...otherProps
}) => <input {...otherProps} />).attrs({
  display: props => (props.block ? 'block' : 'inline-block'),
  width: (props) => {
    if (props.fullWidth) {
      return '100%';
    }

    return props.width || 'initial';
  },
})`
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.misc.borderRadius};
  color: ${props => props.theme.colors.black};
  display: ${props => props.display};
  line-height: initial;
  outline: none;
  padding: ${props => props.theme.padding.sm};
  width: ${props => props.width};

  &[disabled], &[readonly] {
    background-color: ${props => props.theme.colors.primaryLight};
  }

  &:not(:last-child) {
    margin-bottom: ${props => (props.marginBottom ? props.marginBottom : props.theme.margin.sm)};
  }

  ::placeholder {
    color: ${props => props.theme.colors.primary};
  }
`;

export default Input;
