import React from 'react';

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
    // props
    // getData = function return { data }
    // columns = table column headers [[accessor,header,link(1:0)]]
    // rows = table number rows to display
    // searchFields = table search field [[accessor, label]]

    this.state = {
      dataSet: 'new',
      data: {
        loading: false,
        hasFetchedAll: false,
        data: [],
        page: 1,
      }
    };

    // table shaping
    this.tblHeight = props.tblHeight || `450px`;

    // bindings
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.props.getData && this.getData();
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
    this.updateStateData({ 
      loading: true, 
      error: '' 
    });

    this.props.getData({
      search: {},
      filter: {},
      skip: this.state.data.page,
      rows: this.props.rows || 20
    })
    .then(data => {
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
      this.updateStateData({
        loading: false,
        error: err.message,
      });
    });
  }
  render() {
    // tblColumn accessor,header,link(1:0)
    const tblColumn = this.props.columns || [];
    const tblData = this.state.data.data;

    return (
      <BoxTable>
        { this.props.searchFields &&
          <div style={{'paddingBottom': '20px'}}>
            <div>
              Search By:
            </div>
            <div>
              { this.props.searchFields.map(([field, label], i) => (
                  <div key={label}>
                    <input
                      type="radio"
                      name="searchFields"
                      defaultChecked={(i === 0) ? 1 : ``}
                    /> {label}
                  </div>
                ))
              }
            </div>
            <div>
              <input type="input" name="searchText" width="15%" />
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
            </div>
          </div>
        }
        <Table>
          <TableHead>
            <tr>
              { tblColumn.map(([acce, header]) => (
                  <Tblh key={acce}>{header}</Tblh>
                ))
              }
            </tr>
          </TableHead>
          { (!this.state.data.loading && !this.state.data.error) ? 
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
                        keys.forEach(key => {
                          if (key !== '') {
                            value = (value === undefined) ? data[key] : value[key];
                          }
                        });
                        return value
                      })(accessor);
                      return (
                          <Tbld key={`${accessor}${i}`}>
                            { ((link && link === 1) && (route && route !== ``)) ?
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
            :
            <tbody></tbody>
          }
        </Table>
        <div align="center" style={{padding: '20px'}}>
          { this.state.data.loading && `Loading...` }
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