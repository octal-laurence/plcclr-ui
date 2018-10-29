import React from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const TimePicker = styled(({
  block,
  display,
  fullWidth,
  width,
  ...otherProps
}) => {
  return (
    <DatePicker
      dateFormat="hh:mm A"
      showTimeSelect
      showTimeSelectOnly
      {...otherProps}
    />
  );
}).attrs({
  display: props => (props.block ? 'block' : 'inline-block'),
  width: props => (props.fullWidth ? '100%' : 'initial'),
})`
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.misc.borderRadius};
  color: ${props => props.theme.colors.black};
  display: ${props => props.display};
  outline: none;
  padding: ${props => props.theme.padding.sm};
  width: ${props => props.width};

  &[disabled], &[readonly] {
    background-color: ${props => props.theme.colors.primaryLight};
  }

  ::placeholder {
    color: ${props => props.theme.colors.primary};
  }
`;

export default TimePicker;
