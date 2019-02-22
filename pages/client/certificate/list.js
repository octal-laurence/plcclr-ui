import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';

import Wrapper from '../../wrapper';
import Layout from '../../layout';
import Box from '../../ui/box';
import TableCP from 'pages/ui/library/tableCP';

import { listCertificates } from 'model/policeClearanceCertifications';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.listCertificatesTableCP = this.listCertificatesTableCP.bind(this);
  }
  listCertificatesTableCP(query) {
    const { skip, rows } = query;
    const opts = {
      pgSkip: skip,
      pgLimit: rows,
    };

    if (query.hasOwnProperty('dateCertified')) {
      opts.dateCertified = query.dateCertified;
    }

    return listCertificates(opts);
  }
  render() {
    return (
      <Layout>
        <TableCP 
            columns={[
              ['@rid', 'Certificate Id', {link: 1, route: '/certificate?id='}],
              ['plcclrId', 'Application Entry'],
              ['applicantData.fullName', 'Name'],
              ['dateCertified', 'Certified Data']
            ]}
            rows={20}
            getData={this.listCertificatesTableCP}
            filterDate={{ fieldName: 'dateCertified', label: 'Date Certified' }}
          />
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(List);
export default () => Wrapper(InjectedRouter); 