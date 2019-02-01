import React from 'react';
import ReactDOM from 'react-dom';

import {withRouter} from 'next/router';
import Head from 'next/head';

import Wrapper from 'pages/wrapper';
import Layout from 'pages/layout';

class Certificate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Certificate
      </div>
    );
  }
}

const InjectedRouter = withRouter(Certificate);
export default () => Wrapper(InjectedRouter);