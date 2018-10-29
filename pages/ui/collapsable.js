import React from 'react';
import styled from 'styled-components';

const Collapsable = styled(({
  ...otherProps
}) => <div {...otherProps} />).attrs({})`
  
`;

export default Collapsable;
