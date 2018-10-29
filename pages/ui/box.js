import React from 'react';
import styled from 'styled-components';

const Box = styled(({
  flexDirection,

  borderStyle,
  backgroundColor,
  height,
  width,
  ...otherProps
}) => <div {...otherProps} />).attrs({})`

  display: ${p => (p.flexDirection) ? `flex` : `block`};
  flex-direction: ${p => p.flexDirection || `column`};

  border-style: ${p => p.borderStyle};
  ${p => (p.height) && `min-height: ${p.height}; max-height: ${p.height};`}
  ${p => (p.width) && `min-width: ${p.width}; max-width: ${p.width};`}
  ${p => (p.backgroundColor) && `background-color: ${p.backgroundColor};`}

`;

export default Box;