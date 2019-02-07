import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import Head from 'next/head';

import Wrapper from '../../wrapper';
import Layout from '../../layout';

import Box from 'pages/ui/box';
import InputText from 'pages/ui/inputText';
import Button from 'pages/ui/button';

import ApplicantInfo from './applicantInfo';
import ApplicantIDPhoto from './idPhoto';
import ApplicantFingerPrint from './fingerPrint';
import ApplicantSignature from './signature';
import ApplicantInfoSummary from './summary';

// misc
import post from '../../../middleware/router';
import {newApplicationEntry, editApplicationEntry, getApplicationEntry} from 'model/policeClearanceCertifications';

class CertificationForm extends React.Component {
  constructor(props) {
    super(props);
    const id = props.router.query[`id`];
    const addMode = typeof id === 'undefined';

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
    }, {
      tab: 'finalization',
      label: 'Finalization',
    }];

    this.state = {
      addMode,
      editing: {
        status: '',
        error: '',
        loading: false,
      },
      applicantInfo: {
        firstName: '',
        lastName: '',
        middleName: '',
        suffix: '',
        address1: '',
        address2: '',
        barangay: '',
        city: '',
        province: '',
        gender: '',
        dateBirth: '',
        birthPlace: '',
        citizenship: '',
        religion: '',
        civilStatus: '',
        height: '',
        weight: '',
        occupation: '',
        contactNumber: '',
        purpose: '',
        certResidency: '',
        certResidencyIssuedAt: '',
        ctcIssuedDate: ''
      },
      applicantIDPhoto: {
        blob: '',
      },
      applicantFingerPrint: {
        leftThumb: '',
        rightThumb: '',
      },
      applicantSignature: {
        blob: '',
      },
      navTabs: this.navTabs.reduce((json, elem) => {
        json[elem.tab] = 0;
        return json;
      }, {})
    };

    this.renderNavTabs = this.renderNavTabs.bind(this);
    this.applicantInfoInputHandler = this.applicantInfoInputHandler.bind(this);
    this.switchTabHandler = this.switchPageHandler.bind(this);
    this.submitApplicantEntry = this.submitApplicantEntry.bind(this);
    this.getApplicationEntry = this.getApplicationEntry.bind(this);
  }
  applicantInfoInputHandler(field, value) {
    this.setState({
      applicantInfo: {
        ...this.state.applicantInfo,
        [field]: value,
      }
    });
  }
  switchPageHandler(tab) {
    const navTabsStat = this.navTabs.reduce((json, elem) => {
      json[elem.tab] = 0;
      return json;
    }, {});

    const inputValidation = ((tabName) => {
      const [currentTab] = Object.entries(this.state.navTabs).find(([k, v]) => v === 1);
      const invalid = Object.entries(this.state[currentTab] || {})
                      .filter(([k, v]) => v === '' || !v)
                      
      return invalid;
    })(tab);

    if (inputValidation.length === 0) {
      this.setState({
        navTabs: {
          ...navTabsStat,
          [tab]: 1
        }
      });
    } else {
      const invalidInputList = inputValidation.reduce((notifyInvalid, [item]) => {
        notifyInvalid += `${item}\n`;
        return notifyInvalid
      }, '');
      alert(`Check the following record, must be required & valid entry\n${invalidInputList}`);
    }
  }
  submitApplicantEntry() {
    const applicantData = {
      ...this.state.applicantInfo,
      applicantIDPhoto: this.state.applicantIDPhoto.blob,
      applicantFingerPrint: ((input) => {
        const fingerPrints = Object.entries(input)
                             .map(([k, v]) => ({
                              [k]: v.split(',')[1],
                             }))
                             .reduce((obj, item) => {
                              const [[k, v = '']] = Object.entries(item);
                              obj[k] = v
                              return obj;
                             }, {});
        return fingerPrints
      })(this.state.applicantFingerPrint),
      applicantSignature: this.state.applicantSignature.blob
    };

    const certification = (this.state.addMode) ? {
      action: newApplicationEntry,
      input: applicantData,
    } : {
      action: editApplicationEntry,
      input: {...applicantData, id: this.props.router.query.id}
    };
    const {input, action} = certification;

    this.setState({ editing: { ...this.state.editing, loading: true } });
    action(input)
    .then(result => {
      alert('Save Success');
      window.location.href = `/certification-entries`;
    })
    .catch(err => {
      alert(err.message);
      this.setState({ editing: { ...this.state.editing, loading: false, error: err.message } });
    });
  }
  getApplicationEntry() {
    this.setState({
      editing: {
        ...this.state.editing,
        loading: true
      }
    });

    getApplicationEntry(`#${this.props.router.query[`id`]}`)
    .then(data => {
      const { applicant, address, ...certification } = data;

      this.setState({
        editing: {
          ...this.state.editing,
          loading: false
        },
        applicantInfo: {
          ...Object.entries(this.state.applicantInfo)
           .map(([k, v]) => k)
           .reduce((obj, k) => ({
            ...obj,
            [k]: applicant[k]
           }), {}),
          purpose: certification.purpose
        },
        applicantIDPhoto: {
          blob: applicant.applicantIDPhoto
        },
        applicantFingerPrint: {
          leftThumb: `data:image/jpeg;base64,${applicant.applicantFingerPrints.leftThumb}`,
          rightThumb: `data:image/jpeg;base64,${applicant.applicantFingerPrints.rightThumb}`
        },
        applicantSignature: {
          blob: applicant.applicantSignature,
        }
      });
    })
    .catch(err => {
      this.setState({
        editing: {
          ...this.state.editing,
          loading: false,
          error: err.message
        }
      });
    });
  }
  componentDidMount() {
    this.setState({ navTabs: { ...this.state.navTabs, applicantInfo: 1 } });

    if (!this.state.addMode) {
      this.getApplicationEntry();
    } 
  }
  renderNavTabs() {
    return (
      <ul className="nav nav-tabs">{
        this.navTabs.map((item, i) => (
          <li
            key={`${item.tab}`}
            className={`nav-item`}
            onClick={(e) => {
              this.switchPageHandler(item.tab)
            }}
          >
            <a className={`nav-link ${this.state.navTabs[item.tab] === 1 && `active`}`} href="#">{item.label}</a>
          </li>
        ))
      }
      </ul>
    );
  }
  render() {
    return (
      <Layout
        inSidebarNavLink={this.props.router.asPath}
      >
        <Box>
          { this.renderNavTabs() }
          <Box id="formContents" className="container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.submitApplicantEntry();
              }}
            >
              { this.state.navTabs.applicantInfo === 1 && 
                <ApplicantInfo supreme={this} /> 
              }
              { this.state.navTabs.applicantIDPhoto === 1 &&
                <ApplicantIDPhoto supreme={this} />
              }
              { this.state.navTabs.applicantFingerPrint === 1 &&
                <ApplicantFingerPrint supreme={this} />
              }
              { this.state.navTabs.applicantSignature === 1 &&
                <ApplicantSignature supreme={this} />
              }
              { this.state.navTabs.finalization === 1 &&
                <Box>
                  <ApplicantInfoSummary supreme={this} />
                  <hr />
                  <Box className="container" align="right">
                    { this.state.editing.loading ?
                      <label>Please Wait, Record is on Processing...</label>
                      :
                      <Button type="submit">
                        Save
                      </Button>
                    }
                  </Box>
                </Box>
              }
            </form>
          </Box>
        </Box>
        <Head>
          <title>Police Clearance</title>

          {/*FINGERPRINT*/}
          <script src="/static/sdk/fingerPrintScanner/scripts/es6-shim.js" />
          <script src="/static/sdk/fingerPrintScanner/scripts/websdk.client.bundle.min.js" />
          <script src="/static/sdk/fingerPrintScanner/scripts/fingerprint.sdk.min.js" />

          {/*SIGNATURE*/}
          <script src="/static/sdk/signature/signature_pad.umd.js" />
        </Head>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(CertificationForm);
export default () => Wrapper(InjectedRouter);