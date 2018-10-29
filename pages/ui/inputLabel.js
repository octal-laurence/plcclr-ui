/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import styled from 'styled-components';

const InputLabel = styled(({
  labelInlineBlock,
  inline,
  labelTopMargin,
  labelBottomMargin,
  inputDisplay,
  inputTopMargin,
  width,
  ...otherProps
}) => <label {...otherProps} />).attrs({
  inputDisplay: props => (props.inline ? 'inline' : 'block'),
  inputTopMargin: props => (props.inline ? '0' : props.theme.margin.sm),
})`
  color: ${props => props.theme.colors.primary};
  display: ${props => (props.labelInlineBlock ? 'inline-block' : 'block')};
  margin-bottom: ${props => (props.labelInlineBlock && !props.labelBottomMargin ? '0px !important' : `${props.theme.margin.sm} !important`)};
  margin-top: ${props => (props.labelTopMargin ? props.theme.margin.sm : 'initial')};
  ${props => (props.width ? `width: ${props.width};` : '200px')}

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.margin.md};
  }

  input, textarea {
    display: ${props => props.inputDisplay};
    margin-top: ${props => props.inputTopMargin};
  }

  select, .select2-container {
    display: ${props => props.inputDisplay};
    margin-top: ${props => props.inputTopMargin};
  }
`;

export default InputLabel;
