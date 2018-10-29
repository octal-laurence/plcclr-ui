import React from 'react';
import styled from 'styled-components';

const BounceCircle = styled(({
  animationDelay,
  ...otherProps
}) => <div {...otherProps} />).attrs({
  animationDelay: props => `${props.animationDelay || 0}s` || '0.0s',
})`
  animation: sk-bounce 1.5s infinite ease-in-out;
  animation-delay: ${props => props.animationDelay};
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  height: 100%;
  left: 0;
  opacity: 0.6;
  position: absolute;
  top: 0;
  width: 100%;
`;

const BounceContainer = styled(({
  display,
  inline,
  margin,
  size,
  staticContext,
  verticalAlign,
  ...otherProps
}) => <div {...otherProps} />).attrs({
  display: props => (props.inline ? 'inline-block' : 'block'),
  margin: (props) => {
    if (props.inline) {
      return `0 ${props.theme.margin.sm}`;
    }

    return `${props.theme.margin[props.margin] || props.theme.margin.lg} auto`;
  },
  size: (props) => {
    switch (props.size) {
      case 'sm':
        return '1.5rem';
      default:
        return '3rem';
    }
  },
  verticalAlign: props => (props.inline ? 'middle' : 'initial'),
})`
  display: ${props => props.display};
  height: ${props => props.size};
  margin: ${props => props.margin};
  position: relative;
  vertical-align: ${props => props.verticalAlign};
  width: ${props => props.size};
`;

function BounceLoader(props) {
  return (
    <BounceContainer {...props}>
      <BounceCircle />
      <BounceCircle animationDelay={0.75} />
    </BounceContainer>
  );
}

export default BounceLoader;
