import React from 'react';
import styled from 'styled-components';

import theme from './styles/theme';

function Header(props) {
  let Component;
  let customProps = {};
  switch (props.size) {
    case 'sm':
      Component = 'h3';
      break;
    case 'md':
      Component = 'h2';
      break;
    case 'xxl':
      Component = 'h1';
      customProps = { fontSize: theme.font.size.xxl };
      break;
    default:
      Component = 'h1';
      break;
  }

  const StyledHeader = styled(({
    altFontFamily,
    centered,
    color,
    fontFamily,
    fontSize,
    inheritColor,
    textAlign,
    ...otherProps
  }) => <Component {...otherProps} />).attrs({
    color: p => (p.inheritColor === false ? p.theme.colors.primary : 'inherit'),
    fontFamily: (p) => {
      return p.altFontFamily ?
        p.theme.font.family.secondary : p.theme.font.family.primary;
    },
    textAlign: p => (p.centered ? 'center' : 'initial'),
  })`
    color: ${p => p.color};
    font-family: ${p => p.fontFamily};
    ${p => (p.fontSize ? `font-size: ${p.fontSize};` : '')}
    margin: 0 0 ${p => p.theme.margin.md};
    text-align: ${p => p.textAlign};
  `;

  return <StyledHeader {...props} {...customProps}>{props.children}</StyledHeader>;
}

export default Header;