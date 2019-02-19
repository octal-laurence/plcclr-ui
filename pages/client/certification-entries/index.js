import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import Head from 'next/head';

import Wrapper from '../../wrapper';
import Layout from '../../layout';

import Box from 'pages/ui/box';
import Button from 'pages/ui/button';
import TableCP from 'pages/ui/library/tableCP';

// misc
import {listCertificationEntries} from 'model/policeClearanceCertifications';

class CertificationEntries extends React.Component {
  constructor(props) {
    super(props);

    this.listCertificationEntriesTableCP = this.listCertificationEntriesTableCP.bind(this);
  }
  listCertificationEntriesTableCP(query) {
    return listCertificationEntries({
      pgSkip: query.skip,
      pgLimit: query.rows
    });
  }
  render() {
    return (
      <Layout
        inSidebarNavLink={this.props.router.asPath}
      >
        <Box>
          <TableCP 
            columns={[
              // accessor, header
              ['@rid', 'Entry Id', {link: 1, route: `/certification-preview?id=`}],
              ['applicant.fullName', 'Name'],
              ['stationName', 'Station'],
              ['dateCreated', 'Date Created'],
              ['status', 'Status']
            ]}
            rows={20}
            getData={this.listCertificationEntriesTableCP}
          />
        </Box>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(CertificationEntries);
export default () => Wrapper(InjectedRouter);