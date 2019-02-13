import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';

import Wrapper from '../../wrapper';
import Layout from '../../layout';
import Box from '../../ui/box';
import InputLabel from 'pages/ui/inputLabel';
import Input from 'pages/ui/input';
import Button from 'pages/ui/button';

import {getCertificate} from 'model/policeClearanceCertifications';

class Certificate extends React.Component {
  constructor(props) {
    super(props);

    this.certificateId = props.router.query.id;
    this.state = {
      loading: false,
      error: '',
      data: {}
    };

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
      addressComplete: { label: 'address' },
      gender: { label: 'gender' },
      civilStatus: { label: 'civil status' },
      citizenship: { label: 'citizenship' },
      dateBirth: { label: 'birth date' },
      birthPlace: { label: 'birth place' },
      height: { label: 'height' },
      weight: { label: 'weight' },
    };
  }
  getCertificate() {
    this.setState({ loading: true, error: '' })
    getCertificate(`#${this.certificateId}`)
    .then(result => {
      this.setState({ 
        loading: false,
        data: result,
      });
    })
    .catch(err => {
      this.setState({ 
        loading: false,
        error: err.message,
      });
    });
  }
  componentWillMount() {
    this.getCertificate()
  }
  render() {
    const certificateData = this.state 
    return (
      <Layout>
        <Box>
          <Box>
            <h3>
              Police Clearance Certificate
            </h3>
            <hr />
          </Box>
          { this.state.loading && (<Box>Loading...</Box>) }
          { (!this.state.loading && !this.state.error && this.state.data) && (
              <Box>
                <Box>
                  <h4 align="center">Clearance</h4>
                  <hr />
                  <Box>
                    { Object.entries(this.certificationInfo)
                      .map(([k, v], i) => (
                        <Box key={i}>
                          { v.label } :&nbsp;
                          <label><u>{ this.state.data.certificationEntry[k] || '.' }</u></label>
                        </Box>
                      )) 
                    }
                  </Box>
                  <hr />
                  <Box>
                    <Box>
                      Findings:
                      <Box withHorizontalPadding="lg" addSideMarginForChildren="sm">
                        { this.state.data.findings }
                      </Box>
                    </Box><br />
                    <Box>
                      Verified:
                      <Box withHorizontalPadding="lg" addSideMarginForChildren="sm">
                        <Box>
                          {['name', 'title'].map(e => (
                              <p key={e}>{ this.state.data.verifiedBy[e] }</p>
                            )
                          )}
                        </Box>
                      </Box>
                    </Box><br />
                    <Box>
                      Certified:
                      <Box withHorizontalPadding="lg" addSideMarginForChildren="sm">
                        <Box>
                          {['name', 'title'].map(e => (
                              <p key={e}>{ this.state.data.certifiedBy[e] }</p>
                            )
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <h4 align="center">Applicant</h4>
                  <hr />
                  <Box>
                    { Object.entries(this.applicantInfo)
                      .map(([k, v]) => (
                        <Box key={`${k}`}>
                          { v.label } :&nbsp;
                          <label><u>{ this.state.data.applicant[k] || null }</u></label>
                        </Box>
                      )) 
                    }
                  </Box> 
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
                          src={this.state.data.applicant.applicantIDPhoto && this.state.data.applicant.applicantIDPhoto}
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
                                src={this.state.data.applicant.applicantFingerPrints && `data:image/png;base64,${this.state.data.applicant.applicantFingerPrints.leftThumb}`}
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
                                src={this.state.data.applicant.applicantFingerPrints && `data:image/png;base64,${this.state.data.applicant.applicantFingerPrints.rightThumb}`}
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
                              src={this.state.data.applicant.applicantSignature && this.state.data.applicant.applicantSignature}
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
                  <Button>
                    <a href={`/certificate-print?id=${this.state.data[`@rid`]}`} target="_blank">
                      Print
                    </a>
                  </Button>
                </Box>
              </Box>
            )
          }
          { this.state.error && (<Box>{this.state.error}</Box>) }
        </Box>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(Certificate);
export default () => Wrapper(InjectedRouter);