import React from 'react';
import styled from 'styled-components';

const TextArea = styled(({
  block,
  display,
  fullWidth,
  minHeight,
  width,
  marginBottom,
  ...otherProps
}) => <textarea {...otherProps} />).attrs({
  display: props => (props.block ? 'block' : 'inline-block'),
  width: props => (props.fullWidth ? '100%' : 'initial'),
})`
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.misc.borderRadius};
  color: ${props => props.theme.colors.black};
  display: ${props => props.display};
  min-height: ${props => props.minHeight};
  outline: none;
  padding: ${props => props.theme.padding.sm};
  width: ${props => props.width};
  resize: none;

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

export default TextArea;
