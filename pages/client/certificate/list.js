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
    return listCertificates({
      pgSkip: query.skip,
      pgLimit: query.rows
    });
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
            searchFields={[['applicantData.fullName', 'Name']]}
            rows={20}
            getData={this.listCertificatesTableCP}
          />
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(List);
export default () => Wrapper(InjectedRouter); 