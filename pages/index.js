import React from 'react';

import Layout from './layout';
import Wrapper from './wrapper';

const App = () => (
  <Layout>
    <div>
      Police Clearance
    </div>
  </Layout>
);

export default () => Wrapper(App);