import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import Head from 'next/head';

import Wrapper from '../../wrapper';
import Layout from '../../layout';
import NavTabs from '../../components/navTabs';
import Box from '../../ui/box';
import InputLabel from 'pages/ui/inputLabel';
import Input from 'pages/ui/input';
import Button from 'pages/ui/button';
import ModalBox from 'pages/ui/modal';

import post from '../../../middleware/router';
import {getApplicationEntry} from 'model/policeClearanceCertifications';

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
          certificate: {
            verifiedByName: '',
            verifiedByTitle: ''
          },
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

    this.getApplicantionEntry = this.getApplicantionEntry.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }
  getApplicantionEntry(id) {
    const setApplicantData = ((state = {}) => {
      this.setState({
        applicant: {
          ...this.state.applicant,
          ...state
        } 
      }, (state) => console.log(this.state.applicant));
    });

    setApplicantData({ loading: true });

    getApplicationEntry(`#${id}`)
    .then(data => {
      const { applicant, address, ...certification } = data;
      console.log(certification);

      setApplicantData({
        loading: false,
        data: {
          ...this.state.applicant.data,
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
  }
  inputHandler(e) {
    const {name} = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const nameComponents = name.split('.');
    if (nameComponents.length > 1) {
      if (nameComponents[0] === 'certificate') {
        this.setState({
          applicant: {
            ...this.state.applicant,
            data: {
              ...this.state.applicant.data,
              certificate: {
                ...this.state.applicant.data.certificate,
                [nameComponents[1]]: value
              }
            }
          }
        })
      }
    }
  }
  componentDidMount() {
    const {query} = this.props.router;
    this.getApplicantionEntry(query.id);
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
                    .map(([k, v], i) => (
                      <Box key={i}>
                        { v.label } :&nbsp;
                        <label><u>{ applicant.data.certification[k] || '.' }</u></label>
                      </Box>
                    )) 
                  }
                </Box>
              }
              <hr />
              <Box>
                <Box>
                  Verified:
                  <Box withHorizontalPadding="lg" addSideMarginForChildren="sm">
                    { (this.state.applicant.data.certificate.verifiedByName != '' && this.state.applicant.data.certificate.verifiedByTitle) ?
                      (<Box>
                        <p>{ this.state.applicant.data.certificate.verifiedByName }</p>
                        <p>{ this.state.applicant.data.certificate.verifiedByTitle }</p>
                       </Box>
                      ) : (
                        <label>In-complete</label>
                      )
                    }
                    <ModalBox btnName="Update">
                      <Box withVerticalPadding="sm" withHorizontalPadding="md">
                        <InputLabel>
                          Name: 
                          <Input
                            name="certificate.verifiedByName"
                            value={this.state.applicant.data.certificate.verifiedByName}
                            onChange={this.inputHandler}
                            width="60%"
                          />
                        </InputLabel>
                        <InputLabel>
                          Title:  
                          <Input
                            name="certificate.verifiedByTitle"
                            value={this.state.applicant.data.certificate.verifiedByTitle}
                            onChange={this.inputHandler}
                            width="60%"
                          />
                        </InputLabel>
                        <Button>OK</Button>
                      </Box>
                    </ModalBox>
                  </Box>
                </Box><br />
                <Box>
                  Certified:
                  <Box withHorizontalPadding="lg" addSideMarginForChildren="sm">
                    <label>In-complete</label>
                    <Box>
                      Name: Laurence P. Geroy
                    </Box>
                    <br />
                    <Button type="button">Update</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <h4 align="center">Applicant</h4>
              <hr />
              { applicant.loading ?
                <Box>Loading...</Box>
                :
                <Box>
                  { Object.entries(this.applicantInfo)
                    .map(([k, v]) => (
                      <Box key={`${k}`}>
                        { v.label } :&nbsp;
                        <label><u>{ applicant.data.applicant[k] || null }</u></label>
                      </Box>
                    )) 
                  }
                </Box>
              } 
            </Box>
            <Box>
              <h4 align="center">Identification</h4>
              <hr />
              <Box
                height="400px"
                borderStyle="groove"
                flexDirection="row"
              >
                <Box
                  width="50%"
                  height="100%"
                  position="relative"
                >
                  <Box 
                    justifyMe
                    width="400px"
                  >
                    <img
                      src={applicant.data.applicant.applicantIDPhoto && applicant.data.applicant.applicantIDPhoto}
                      style={{
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        borderStyle: 'groove'
                      }}
                    />
                    <Box align="center">
                      ID Picture
                    </Box>
                  </Box>
                </Box>
                <Box
                  width="50%"
                  height="100%"
                  position="relative"
                >
                  <Box 
                    justifyMe
                    width="300px"
                  >
                    <Box
                      width="100%"
                      height="150px"
                      align="center"
                    >
                      <Box flexDirection="row">
                        <Box 
                          className="leftThumb"
                          borderStyle="groove"
                          height="150px"
                          width="50%"
                        >
                          <Box>
                            Left Thumb
                          </Box>
                          <img
                            src={applicant.data.applicant.applicantFingerPrints && `data:image/png;base64,${applicant.data.applicant.applicantFingerPrints.leftThumb}`}
                            style={{
                              display: 'block',
                              width: 'auto',
                              height: '80%',
                            }}
                          />
                        </Box>
                        <Box 
                          className="rightThumb"
                          borderStyle="groove"
                          height="150px"
                          width="50%"
                        >
                          <Box>
                            Right Thumb
                          </Box>
                          <img
                            src={applicant.data.applicant.applicantFingerPrints && `data:image/png;base64,${applicant.data.applicant.applicantFingerPrints.rightThumb}`}
                            style={{
                              display: 'block',
                              width: 'auto',
                              height: '80%',
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      width="100%"
                      height="150px"
                      align="center"
                    >
                      <Box
                        width="200px"
                      >
                        <img
                          src={applicant.data.applicant.applicantSignature && applicant.data.applicant.applicantSignature}
                          style={{
                            display: 'block',
                            width: '100%',
                            height: 'auto',
                            'border-bottom': '2px groove'
                          }}
                        />
                        <Box>
                          Signature
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box> 
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