import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import Head from 'next/head';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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

    this.renderReactDataTable = this.renderReactDataTable.bind(this);
    this.renderStyledTable = this.renderStyledTable.bind(this);
  }
  componentDidMount() {
    this.listCertificationEntries();
  }
  renderReactDataTable() {
    const certificationEntries = this.state.certificationEntries; console.log(certificationEntries);
    const dataColumns = [
      // accessor, header
      ['@rid', 'Entry Id'],
      ['applicant.fullName', 'Name'],
      ['stationName', 'Station'],
      ['dateCreated', 'Date Created'],
      ['status', 'Status']
    ];
    const data = certificationEntries.data.map(entry => ({
      ...entry,
      '@rid': ((([, rid]) => (<a href={`/certification-preview?id=${rid}`} >{rid}</a>))(entry['@rid'].split('#')))
    }))

    // const columns = [{
    //   Header: 'Name',
    //   accessor: 'name' // String-based value accessors!
    // }, {
    //   Header: 'Age',
    //   accessor: 'age',
    //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    // }, {
    //   id: 'friendName', // Required because our accessor is not a string
    //   Header: 'Friend Name',
    //   accessor: d => d.friend.name // Custom value accessors!
    // }, {
    //   Header: props => <span>Friend Age</span>, // Custom header components!
    //   accessor: 'friend.age'
    // }]

    const columns = dataColumns.map(([acc, header]) => ({
      Header: header,
      accessor: acc,
    }));

    return (
      <Box>
        {console.log(data.length)}
        <ReactTable
          manual
          data={data}
          columns={columns}
          showPageSizeOptions={false}
          showPagination={false}
        />
      </Box>
    );
  }
  renderStyledTable() {
    const certificationEntries = this.state.certificationEntries;

    return (
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
              <Box>
                <Button
                  centered
                  onClick={() => {
                    this.listCertificationEntries();
                  }}
                >
                  Load more
                </Button>
              </Box>
          )
        }
      </Box>
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
          { this.renderStyledTable() }
        </Box>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(CertificationEntries);

export default () => Wrapper(InjectedRouter);