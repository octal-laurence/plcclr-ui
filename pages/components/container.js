import React from 'react';
import styled from 'styled-components';

const Container = styled(({
  addSideMarginForChildren,
  backgroundColor,
  color,
  dontGrow,
  disableFlex,
  display,
  flexDirection,
  flexGrow,
  fontFamily,
  fullHeight,
  marginTop,
  maxWidth,
  pinBottom,
  position,
  width,
  withPadding,
  withHorizontalPadding,
  withVerticalPadding,
  ...otherProps
}) => <div {...otherProps} />).attrs({
  addSideMarginForChildren: props => props.theme.margin[props.addSideMarginForChildren] || 0,
  backgroundColor: props => props.backgroundColor || 'initial',
  color: props => props.color || 'initial',
  display: props => (props.disableFlex ? 'block' : 'flex'),
  flexDirection: props => props.flexDirection || 'column',
  flexGrow: props => (props.dontGrow || props.width ? 0 : 1),
  fontFamily: props => props.fontFamily || 'inherit',
  marginTop: props => (props.pinBottom ? 'auto' : 'initial'),
  maxWidth: props => (props.maxWidth ? `${props.maxWidth}px` : 'initial'),
  width: props => (props.width ? `${props.width}px` : 'initial'),
  withPadding: props => props.theme.padding[props.withPadding] || 0,
  withHorizontalPadding: props => props.theme.padding[props.withHorizontalPadding] || 0,
  withVerticalPadding: props => props.theme.padding[props.withVerticalPadding] || 0,
})`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-grow: ${props => props.flexGrow};
  font-family: ${props => props.fontFamily};
  height: ${props => (props.fullHeight ? '100%' : 'initial')};
  margin-top: ${props => props.marginTop};
  max-width: ${props => props.maxWidth};
  padding: ${(props) => {
    if (props.withPadding) {
      return props.withPadding;
    }

    const horizontalPadding = props.withHorizontalPadding;
    const verticalPadding = props.withVerticalPadding;
    return `${verticalPadding} ${horizontalPadding}`;
  }};
  width: ${props => props.width};

  ${p => p.addSideMarginForChildren && `
    > * {
      &:not(:last-child) {
        margin-right: ${p.addSideMarginForChildren};
      }
    }
  `}
`;

export default Container;