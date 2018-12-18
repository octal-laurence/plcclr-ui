import React from 'react';
import styled from 'styled-components';

const BoxTable = styled(({
  width,
  ...otherProps,
}) => <div {...otherProps} />).attrs({})`
  max-width: ${props => (props.width ? props.width : `100%`)}
`;

const Table = styled(({
  width,
  ...otherProps
}) => <table {...otherProps} />).attrs({
  width: props => (props.fullWidth === false ? 'initial' : '100%'),
})`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

const TableBody = styled.tbody`
  display:block;
  width: 100%;
  overflow: auto;
  height: ${p => p.tblHeight};
`;

const TableHead = styled.thead`
  background: black;
  color:#fff;
  tr {
    display: block;
  }
`;

const tcell = `
  padding: 5px;
  text-align: left;
  width: 200px;
`;

const Tblh = styled.th`${tcell}`;
const Tbld = styled.td`${tcell}`;

export {
  Table,
  TableHead,
  TableBody,
  Tblh,
  Tbld,
  BoxTable,
};