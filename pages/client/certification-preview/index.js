import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';

import Wrapper from '../../wrapper';
import Layout from '../../layout';
import NavTabs from '../../components/navTabs';
import Box from '../../ui/box';
import InputLabel from 'pages/ui/inputLabel';
import Input from 'pages/ui/input';
import Button from 'pages/ui/button';
import ModalBox from 'pages/ui/modal';

import {getApplicationEntry, deleteApplicationEntry, grantCertification} from 'model/policeClearanceCertifications';

class CertificationPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applicant: {
        error: '',
        loading: false,
        data: {
          applicant: {},
          address: {},
          certification: {},
          certificate: {
            verifiedByName: '',
            verifiedByTitle: '',
            certifiedByName: '',
            certifiedByTitle: '',
          },
        },
        delete: false,
      }
    }

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

    this.getApplicationEntry = this.getApplicationEntry.bind(this);
    this.deleteApplicationEntry = this.deleteApplicationEntry.bind(this);
    this.grantCertification = this.grantCertification.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.setApplicantData = ((state = {}) => {
      this.setState({
        applicant: {
          ...this.state.applicant,
          ...state
        } 
      });
    });
  }
  getApplicationEntry(id) {
    this.setApplicantData({ loading: true, error: '' });

    getApplicationEntry(`#${id}`)
    .then(data => {
      const { applicant, address, ...certification } = data;

      this.setApplicantData({
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
      this.setApplicantData({
        loading: false,
        error: err.message
      });
    });
  }
  deleteApplicationEntry(id) {
    this.setApplicantData({ loading: true , delete: true, error: ''});

    deleteApplicationEntry(`#${id}`)
    .then(result => {
      this.setApplicantData({ loading: false , delete: false});

      alert('Record Deleted...');
      window.location.href = `/certification-entries`;
    })
    .catch(err => {
      this.setApplicantData({ loading: false , delete: false, error: err.message });
    });
  }
  grantCertification() {
    const certificationData = {
      plcclrId: `#${this.state.applicant.data.certification['@rid']}`,
      machineId: this.state.applicant.data.certification.machineId,
      station: this.state.applicant.data.certification.station,
      applicantId: `#${this.state.applicant.data.applicant['@rid']}`,
      findings: 'granted',
      verifiedBy: {
        id: 'vbn',
        name: this.state.applicant.data.certificate.verifiedByName, 
        title: this.state.applicant.data.certificate.verifiedByTitle 
      },
      certifiedBy: {
        id: 'cbn',
        name: this.state.applicant.data.certificate.certifiedByName, 
        title: this.state.applicant.data.certificate.certifiedByTitle
      }, 
    }

    this.setApplicantData({ loading: true , error: ''});  
    grantCertification(certificationData)
    .then(result => {
      this.setApplicantData({ loading: false });

      alert('Certificate Granted');
      window.location.href = `/certificate?id=${result['@rid'].split('#')[1]}`;
    })
    .catch(err => {
      this.setApplicantData({ loading: false, error: err.message });
    })
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
  componentWillMount() {
    const {query} = this.props.router;
    this.getApplicationEntry(query.id);
  }
  render() {
    const {applicant} = this.state;
    const {query} = this.props.router;

    return (
      <Layout>
        <Box>
          <Box>
            <h3>
              Certification Preview
            </h3>
            <hr />
          </Box>
          { applicant.loading && (<Box>Loading...</Box>) }
          { (!applicant.loading && !applicant.error && applicant.data.applicant) && (
              <Box>
                <Box addSideMarginForChildren="sm">
                  <Button>
                    <a href={`/certification-form?id=${applicant.data.certification[`@rid`]}`}>
                      Edit
                    </a>
                  </Button>
                  <Button>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      const confirmDelete = confirm(`Confirm Delete Record ${applicant.data.certification[`@rid`]}`);
                      if (confirmDelete) {
                        this.deleteApplicationEntry(applicant.data.certification[`@rid`]);
                      }
                    }}>
                      Delete
                    </a>
                  </Button>
                </Box>
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
                        { (applicant.data.certificate.verifiedByName != '' && applicant.data.certificate.verifiedByTitle) ?
                          (<Box>
                            <p>{ applicant.data.certificate.verifiedByName }</p>
                            <p>{ applicant.data.certificate.verifiedByTitle }</p>
                           </Box>
                          ) : (
                            <label>In-complete</label>
                          )
                        }
                        <ModalBox 
                          btnName="Update"
                          submit={() => {
                            return new Promise((resolve, reject) => {
                              resolve('success');
                            });
                          }}>
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
                          </Box>
                        </ModalBox>
                      </Box>
                    </Box><br />
                    <Box>
                      Certified:
                      <Box withHorizontalPadding="lg" addSideMarginForChildren="sm">
                        { (applicant.data.certificate.certifiedByName != '' && applicant.data.certificate.certifiedByTitle) ?
                          (<Box>
                            <p>{ applicant.data.certificate.certifiedByName }</p>
                            <p>{ applicant.data.certificate.certifiedByTitle }</p>
                           </Box>
                          ) : (
                            <label>In-complete</label>
                          )
                        }
                        <ModalBox 
                          btnName="Update"
                          submit={() => {
                            return new Promise((resolve, reject) => {
                              resolve('success');
                            });
                          }}>
                          <Box withVerticalPadding="sm" withHorizontalPadding="md">
                            <InputLabel>
                              Name: 
                              <Input
                                name="certificate.certifiedByName"
                                value={this.state.applicant.data.certificate.certifiedByName}
                                onChange={this.inputHandler}
                                width="60%"
                              />
                            </InputLabel>
                            <InputLabel>
                              Title:  
                              <Input
                                name="certificate.certifiedByTitle"
                                value={this.state.applicant.data.certificate.certifiedByTitle}
                                onChange={this.inputHandler}
                                width="60%"
                              />
                            </InputLabel>
                          </Box>
                        </ModalBox>
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
                                'borderBottom': '2px groove'
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
                <Box 
                  align="center"
                  withVerticalPadding="lg"
                >
                  <Button onClick={(e) => {
                    e.preventDefault();
                    this.grantCertification();
                  }}>
                    Grant Certification
                  </Button>
                </Box>
              </Box>
            )
          }
          { applicant.error && (<Box>{applicant.error}</Box>) }
        </Box>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(CertificationPreview);

export default () => Wrapper(InjectedRouter);