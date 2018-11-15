import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import Head from 'next/head';

import Wrapper from '../../wrapper';
import Layout from '../../layout';
import NavTabs from '../../components/navTabs';

import Box from '../../ui/box';
import {
  Table,
  TableBody,
  TableData,
  TableFooterMessage,
  TableHead,
  TableRow,
} from '../../ui/table';
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
      this.setState({
        certificationEntries: {
          ...this.state.certificationEntries,
          loading: true,
        }
      });

      post(`/police-clearance-certification/list`, {
        pgSkip: this.state.certificationEntries.page,
      })
      .then(list => {
        this.setState({
          certificationEntries: {
            ...this.state.certificationEntries,
            hasFetchedAll: !(list.length > 0),
            loading: false,
            page: this.state.certificationEntries.page +1,
            data: [
              ...this.state.certificationEntries.data,
              ...list
            ]
          }
        })
      })
      .catch(err => console.log(err));
    }).bind(this);
  }
  componentDidMount() {
    this.listCertificationEntries();
  }
  render() {
    const certificationEntries = this.state.certificationEntries;

    return (
      <Layout>
        <Box>
          <Box>
            List
            <hr />
          </Box>
          <Box>
            <Table>
              <TableHead>
                <TableRow>
                  { ['Entry ID', 'Name', 'Station', 'Date Created', 'Status'].map((name, i) => (
                      <TableData key={i}>
                        {name}
                      </TableData>
                    ))
                  }
                </TableRow>
              </TableHead>
              <TableBody> {
                certificationEntries.data.map(entry => (
                  <TableRow key={entry['@rid']}>
                    <TableData>{ ((id) => {
                      const [, rid] = id.split('#');
                      return (<a href={`/certification-preview?id=${rid}`} >{rid}</a>)
                    })(entry['@rid']) }</TableData>
                    <TableData>{ entry['applicant']['fullName'] }</TableData>
                    <TableData>{ entry['stationName'] }</TableData>
                    <TableData>{ entry['dateCreated'] }</TableData>
                    <TableData>{ entry['status'] }</TableData>
                  </TableRow>
                ))
              }
              </TableBody>
            </Table>
            { certificationEntries.loading && <Box>Loading...</Box> }
            { !certificationEntries.loading && 
              ( certificationEntries.hasFetchedAll ?
                  <TableFooterMessage>No more result.</TableFooterMessage>
                  :
                  <Button
                    centered
                    onClick={() => {
                      this.listCertificationEntries();
                    }}
                  >
                    Load more
                  </Button>
              )
            }
          </Box>
        </Box>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(CertificationEntries);

export default () => Wrapper(InjectedRouter);