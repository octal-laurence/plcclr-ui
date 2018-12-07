import React from 'react';
import styled from 'styled-components';

const Box = styled(({
  addSideMarginForChildren,
  flexDirection,
  justifyMe,
  position,
  withHorizontalPadding,
  withVerticalPadding,

  borderStyle,
  backgroundColor,
  height,
  width,
  ...otherProps
}) => <div {...otherProps} />).attrs({
  addSideMarginForChildren: props => props.theme.margin[props.addSideMarginForChildren] || 0,
  withHorizontalPadding: props => props.theme.padding[props.withHorizontalPadding] || 0,
  withVerticalPadding: props => props.theme.padding[props.withVerticalPadding] || 0,
})`
  display: ${p => (p.flexDirection) ? `flex` : `block`};
  flex-direction: ${p => p.flexDirection || `column`};
  padding: ${(props) => {
    const horizontalPadding = props.withHorizontalPadding;
    const verticalPadding = props.withVerticalPadding;
    return `${verticalPadding} ${horizontalPadding}`;
  }};

  border-style: ${p => p.borderStyle};

  ${p => (p.height) && `min-height: ${p.height}; max-height: ${p.height};`}
  ${p => (p.width) && `min-width: ${p.width}; max-width: ${p.width};`}
  ${p => (p.backgroundColor) && `background-color: ${p.backgroundColor};`}

  ${p => (p.position) && `position: ${p.position};`}
  ${p => (p.justifyMe) && `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}

  ${p => p.addSideMarginForChildren && `
    > * {
      &:not(:last-child) {
        margin-right: ${p.addSideMarginForChildren};
      }
    }
  `}
`;

export default Box;