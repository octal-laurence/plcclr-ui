import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import Head from 'next/head';

import Wrapper from '../../wrapper';
import Layout from '../../layout';
import NavTabs from '../../components/navTabs';
import Box from '../../ui/box';

import post from '../../../middleware/router';

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
    this.certificationInfo = {
      machineId: { label: 'machine#' },
      station: { label: 'station' },
      stationName : { label: 'station name ' },
      dateCreated : { label: 'date file' },
      dateUpdated: { label: 'date update' },
      purpose: { label: 'purpose' },
      remarks: { label: 'remarks' },
      status: { label: 'status' },
    };
    this.applicantInfo = {
      firstName: { label: 'first name' },
      lastName: { label: 'last name' },
      middleName: { label: 'middle name' },
      suffix: { label: 'suffix' },
      address: { label: 'address' },
      gender: { label: 'gender' },
      civilStatus: { label: 'civil status' },
      citizenship: { label: 'citizenship' },
      dateBirth: { label: 'birth date' },
      birthPlace: { label: 'birth place' },
      height: { label: 'height' },
      weight: { label: 'weight' },
    };

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

      post(`/police-clearance-certification/getRecord`, {id: `#${id}`})
      .then(data => {
        const { applicant, address, ...certification } = data;
        setApplicantData({
          loading: false,
          data: {
            certification,
            applicant: {
              ...applicant,
              address: (({address1,address2,barangay,city,province}) => {
                          return `${address1} ${address2} ${barangay}, ${city} ${province}`
                        })(address)
            }
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
                  { Object.entries(this.certificationInfo)
                    .map(([k, v]) => [(
                      <Box key={k}>
                        { v.label } :&nbsp;
                        <label><u>{ applicant.data.certification[k] || null }</u></label>
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
                  { Object.entries(this.applicantInfo)
                    .map(([k, v]) => [(
                      <Box key={k}>
                        { v.label } :&nbsp;
                        <label><u>{ applicant.data.applicant[k] || null }</u></label>
                      </Box>
                    ), (<br />)].map((elem) => elem)) 
                  }
                </Box>
              }
            </Box>
            <Box>
              <h4 align="center">Identification</h4>
              <hr />
              <Box
                height="300px"
                borderStyle="groove"
                flexDirection="row"
              >
                images here... 
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(CertificationPreview);

export default () => Wrapper(InjectedRouter);