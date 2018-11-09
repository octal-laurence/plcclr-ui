import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import Head from 'next/head';

import Wrapper from '../../wrapper';
import Layout from '../../components/layout';
import NavTabs from '../../components/navTabs';

import Box from '../../ui/box';

import PlcclrAPI from '../../../api_services/plcclr-api';

class CertificationPreview extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      applicant: {
        error: '',
        loading: false,
        data: {
          applicant: {},
          certification: {},
        },
      }
    }

    this.navTabs = [{
      tab: 'applicantInfo',
      label: 'Start',
    }, {
      tab: 'applicantIDPhoto',
      label: 'ID Photo',
    }, {
      tab: 'applicantFingerPrint',
      label: 'Finger Print',
    }, {
      tab: 'applicantSignature',
      label: 'Signature',
    }]

    this.getApplicantEntry = ((id) => {
      const setApplicantData = ((state = {}) => {
        this.setState({
          applicant: {
            ...this.state.applicant,
            ...state
          } 
        }, (state) => console.log(this.state.applicant));
      });

      setApplicantData({ loading: true });

      const plcclr = new PlcclrAPI();
      plcclr.getApplicantEntry(`#${id}`)
      .then(data => {
        const { applicant, ...certification } = data;
        setApplicantData({
          loading: false,
          data: {
            certification,
            applicant,
          }
        });
      })
      .catch(err => {
        setApplicantData({
          loading: false,
          error: err.message
        });
      });
    }).bind(this);
  }
  componentDidMount() {
    const {query} = this.props.router;
    this.getApplicantEntry(query.id);
  }
  render() {
    const {applicant} = this.state;
    return (
      <Layout>
        <Box>
          <Box>
            <h3>
              Certification Preview
            </h3>
            <hr />
          </Box>
          <br />
          <Box>
            <Box>
              <h4 align="center">Clearance</h4>
              <hr />
              { applicant.loading ?
                <Box>Loading...</Box>
                :
                <Box>
                  { Object.entries(applicant.data.certification)
                    .map(([k, v]) => [(
                      <Box key={k}>
                        {k} :&nbsp;
                        <label><u>{v}</u></label>
                      </Box>
                    ), (<br />)].map((elem) => elem)) 
                  }
                </Box>
              }
            </Box>
            <Box>
              <h4 align="center">Applicant</h4>
              <hr />
              { applicant.loading ?
                <Box>Loading...</Box>
                :
                <Box>
                  { Object.entries(applicant.data.applicant)
                    .map(([k, v]) => [(
                      <Box key={k}>
                        {k} :&nbsp;
                        <label><u>{v}</u></label>
                      </Box>
                    ), (<br />)].map((elem) => elem)) 
                  }
                </Box>
              }
            </Box>
          </Box>
        </Box>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(CertificationPreview);

export default () => Wrapper(InjectedRouter);