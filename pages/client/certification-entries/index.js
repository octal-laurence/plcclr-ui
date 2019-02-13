import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import Head from 'next/head';

import Wrapper from '../../wrapper';
import Layout from '../../layout';

import Box from 'pages/ui/box';
import Button from 'pages/ui/button';
import {
  Table,
  TableHead,
  TableBody,
  Tblh,
  Tbld,
  BoxTable,
} from 'pages/ui/library/tableCP/table';

// misc
import {listCertificationEntries} from 'model/policeClearanceCertifications';

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

    this.renderTableCP = this.renderTableCP.bind(this);
    this.listCertificationEntries = this.listCertificationEntries.bind(this);
  }
  listCertificationEntries() {
    listCertificationEntries({
      pgSkip: this.state.certificationEntries.page,
    })
    .then(result => {
      console.log(result);
      this.setState({
        certificationEntries: {
          ...this.state.certificationEntries,
          loading: false,
          page: this.state.certificationEntries.page +1,
          data: [
            ...this.state.certificationEntries.data,
            ...result,
          ]
        }
      });
    })
    .catch(err => {
      this.setState({
        certificationEntries: {
          ...this.state.certificationEntries,
          loading: false,
        }
      });
    });
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
      <BoxTable>
        <Box>
          Filter Name:&nbsp;<input type="text"/>
          <button
            type="button"
          >
            search
          </button>
        </Box><br />
        <Table>
          <TableHead>
            <tr>
              { dataColumns.map(([acce, header]) => (
                  <Tblh key={acce}>{header}</Tblh>
                ))
              }
            </tr>
          </TableHead>
          <TableBody tblHeight='650px'>
            { certificationEntries.data.map((data, i) => (
                <tr key={i} width="100%">
                  { dataColumns.map(([accessor, , linkOpt={}]) => {
                    const {link, route} = linkOpt;
                    const tblData = ((input) => {
                      const keys = input.split('.');
                      if (!(keys.length > 1)) {
                        return data[input];
                      }

                      let value;
                      keys.map(key => {
                        if (key != '') {
                          value = (value === undefined) ? data[key] : value[key];
                        }
                      });
                      return value
                    })(accessor);
                    return (
                        <Tbld key={accessor}>
                          { ((link && link === 1) && (route && route != ``)) ?
                            <a href={`${route}${tblData}`} >{tblData}</a>
                            :
                            tblData
                          }
                        </Tbld>
                      )
                    })
                  }
                </tr>
              ))
            }
          </TableBody>
        </Table>
        <Box align="center">
          { this.state.certificationEntries.loading }
          { this.state.certificationEntries.loading && `loading...` }
          { !this.state.certificationEntries.loading &&
            (this.state.certificationEntries.hasFetchedAll ?
              `No more result.`
              :
              <Button
                centered
                type="button"
                onClick={e => {
                  this.setState({
                    dataSet: 'series',
                  });
                }}
              >
                load more
              </Button>
            )
          }
        </Box>
      </BoxTable>
    );
  }
  componentDidMount() {
    this.listCertificationEntries();
  }
  render() {
    return (
      <Layout
        inSidebarNavLink={this.props.router.asPath}
      >
        <Box>
          { this.renderTableCP() }
        </Box>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(CertificationEntries);
export default () => Wrapper(InjectedRouter);