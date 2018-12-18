import React from 'react';
import styled from 'styled-components';

const Table = styled(({
  width,
  ...otherProps
}) => <table {...otherProps} />).attrs({
  width: props => (props.fullWidth === false ? 'initial' : '100%'),
})`
  border-spacing: 0 ${props => props.theme.margin.sm};
  margin: 0 0 ${props => props.theme.margin.md};
  width: ${props => props.width};
`;

const TableBody = styled.tbody`
  
`;

const TableData = styled(({
  center,
  collapsed,
  paddingRight,
  width,
  ...otherProps
}) => <td {...otherProps} />)`
  text-align: ${props => (props.center ? 'center' : 'initial')};
  max-width: 500px;
  width: ${props => props.width || 'initial'};
  word-wrap: break-word;
  padding-right: ${props => (props.paddingRight ? props.paddingRight : 'initial')};
`;

const TableFooterMessage = styled.p`
  color: ${props => props.theme.colors.primaryLight};
  text-align: center;
`;

const TableHead = styled.thead`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:not(:last-child) td {
    border-bottom: 1px solid ${props => props.theme.colors.primaryLight};
    padding-bottom: ${props => props.theme.margin.sm};
  }
`;

export {
  Table,
  TableBody,
  TableData,
  TableFooterMessage,
  TableHead,
  TableRow,
};
