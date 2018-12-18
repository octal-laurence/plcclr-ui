import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import Head from 'next/head';

import Wrapper from '../../wrapper';
import Layout from '../../layout';
import NavTabs from '../../components/navTabs';

import Box from '../../ui/box';
import TableCP from '../../ui/library/tableCP';
import Button from '../../ui/button';

import post from '../../../middleware/router';

class CertificationEntries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      certificationEntries: {
        loading: false,
        hasFetchedAll: false,
        data: [],
        page: 1,
      }
    };

    this.listCertificationEntries = (() => {
      return new Promise((resolve, reject) => {
        post(`/police-clearance-certification/list`, {
          pgSkip: this.state.certificationEntries.page,
        })
        .then(list => {
          this.setState({
            certificationEntries: {
              ...this.state.certificationEntries,
              page: this.state.certificationEntries.page +1,
            }
          });
          resolve(list);
        })
        .catch(err => {
          reject(err);
        });
      })
    }).bind(this);

    this.renderTableCP = this.renderTableCP.bind(this);
  }
  renderTableCP() {
    const certificationEntries = this.state.certificationEntries;
    const dataColumns = [
      // accessor, header
      ['@rid', 'Entry Id', {link: 1, route: `/certification-preview?id=`}],
      ['applicant.fullName', 'Name'],
      ['stationName', 'Station'],
      ['dateCreated', 'Date Created'],
      ['status', 'Status']
    ];

    return (
      <TableCP 
        columns={dataColumns}
        sourceData={this.listCertificationEntries}
        serverSideRoute={`/police-clearance-certification/list`}
      />
    );
  }
  render() {
    return (
      <Layout
        inSidebarNavLink={this.props.router.asPath}
      >
        <Box>
          <Box>
            List
            <hr />
          </Box>
          { this.renderTableCP() }
        </Box>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(CertificationEntries);

export default () => Wrapper(InjectedRouter);