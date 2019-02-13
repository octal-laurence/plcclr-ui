import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';

import Wrapper from '../../wrapper';
import Layout from '../../layout';
import Box from '../../ui/box';
import {
  Table,
  TableHead,
  TableBody,
  Tblh,
  Tbld,
  BoxTable,
} from 'pages/ui/library/tableCP/table';

import { listCertificates } from 'model/policeClearanceCertifications';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: '',
      data: [],
    }

    this.renderTableCP = this.renderTableCP.bind(this);
    this.listCertificates = this.listCertificates.bind(this);
  }
  listCertificates() {
    this.setState({ loading: true, error: '' });
    listCertificates()
    .then(result => {
      this.setState({ loading: false, data: result });
    })
    .catch(err => {
      this.setState({ loading: false, error: err.message });
    });
  }
  componentWillMount() {
    this.listCertificates();
  }
  renderTableCP() {
    const dataColumns = [
      ['@rid', 'Certificate Id', {link: 1, route: '/certificate?id='}],
      ['plcclrId', 'Application Entry'],
      ['applicantData.fullName', 'Name'],
      ['dateCertified', 'Certified Data']
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
        { this.state.loading &&
          <Box>Loading...</Box>
        }
        { (!this.state.loading && this.state.error) &&
          <Box>{this.state.error}</Box>
        }
        { (!this.state.loading && !this.state.error && this.state.data) &&
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
              { this.state.data.map((certificate, i) => {
                  return (
                    <tr key={i}>
                      { dataColumns.map(([accessor, , linkOpt={}]) => {
                        const {link, route} = linkOpt;
                        const tblData = ((input) => {
                          const keys = input.split('.');
                          
                          if (!(keys.length > 1)) {
                            return certificate[input];
                          }

                          let value;
                          keys.map(key => {
                            if (key != '') {
                              value = (value === undefined) ? certificate[key] : value[key];
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
                  )
                }) 
              }
            </TableBody>
          </Table>
        }
      </BoxTable>
    )
  }
  render() {
    return (
      <Layout>
        { this.renderTableCP() }
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(List);
export default () => Wrapper(InjectedRouter);