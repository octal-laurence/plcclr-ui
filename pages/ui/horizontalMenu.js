import React from 'react';
import styled from 'styled-components';

const HorizontalMenu = styled(({
  buttonRightMargin,
  ...otherProps
}) => <div {...otherProps} />)`
  display: block;
  margin-bottom: ${props => props.theme.margin.md};

  button {
    margin-right: ${props => (props.buttonMargin ? props.buttonRightMargin : '1em')};
  }
`;

export default HorizontalMenu;
