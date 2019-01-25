import React from 'react';

// misc
import post from './middleware/router';

import {
  Table,
  TableHead,
  TableBody,
  Tblh,
  Tbld,
  BoxTable,
} from './table';

class TableCP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSet: 'new',
      data: {
        loading: false,
        hasFetchedAll: false,
        data: [],
        page: 1,
      }
    };

    // table data functions
    // receive data should be array
    this.serverSideRoute = props.serverSideRoute || ``;

    // table shaping
    this.tblHeight = props.tblHeight || `600px`;

    // bindings
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  updateStateData (obj) {
    this.setState({
      data: {
        ...this.state.data,
        ...obj
      }
    });
  }
  getData() {
    this.updateStateData({ loading: true });

    post(this.serverSideRoute, {
      pgSkip: this.state.data.page,
    })
    .then(data => {
      // extract record (new or series)
      const initialRecords = this.state.dataSet === 'series' ? this.state.data.data : [];
      this.updateStateData({
        loading: false,
        hasFetchedAll: !(data.length > 0),
        page: this.state.data.page +1,
        data: [
          ...initialRecords,
          ...data
        ]
      });
    })
    .catch(err => {
      this.updateStateData({ loading: false, error: err.message });
    });
  }
  render() {
    // tblColumn accessor,header,link(1:0)
    const tblColumn = this.props.columns || [];
    const tblData = this.state.data.data;

    return (
      <BoxTable>
        <div>
          Filter Name:&nbsp;<input type="text"/>
          <button
            type="button"
            onClick={e => {
              this.setState({
                dataSet: 'new',
                data: {
                  ...this.state.data,
                  page: 1,
                }
              }, () => {
                this.getData();
              });
            }}
          >
            search
          </button>
        </div><br />
        <Table>
          <TableHead>
            <tr>
              { tblColumn.map(([acce, header]) => (
                  <Tblh key={acce}>{header}</Tblh>
                ))
              }
            </tr>
          </TableHead>
          <TableBody tblHeight={this.tblHeight}>
            { tblData.map((data, i) => (
                <tr key={i}>
                  { tblColumn.map(([accessor, , linkOpt={}]) => {
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
        <div align="center">
          { this.state.data.loading }
          { this.state.data.loading && `loading...` }
          { !this.state.data.loading &&
            (this.state.data.hasFetchedAll ?
              `No more result.`
              :
              <button
                type="button"
                onClick={e => {
                  this.setState({
                    dataSet: 'series',
                  });
                  this.getData();
                }}
              >
                load more
              </button>
            )
          }
        </div>
      </BoxTable>
    );
  }
}

export default TableCP;