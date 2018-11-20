import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import Head from 'next/head';

import Wrapper from '../../wrapper';
import Layout from '../../layout';
import NavTabs from '../../components/navTabs';
import Sidebar from '../../components/sidebar';

import Box from '../../ui/box';
import InputText from '../../ui/inputText';
import Button from '../../ui/button';

import ApplicantInfo from './applicantInfo';
import ApplicantIDPhoto from './idPhoto';
import ApplicantFingerPrint from './fingerPrint';
import ApplicantSignature from './signature';
import ApplicantInfoSummary from './summary';

import post from '../../../middleware/router';

class CertificationForm extends React.Component {
  constructor(props) {
    super(props);

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
        civilStatus: '',
        dateBirth: '',
        birthPlace: '',
        religion: '',
        height: '',
        weight: '',
        occupation: '',
        citizenship: '',
        contactNumber: '',
        purpose: '',
        certResidency: '',
        certResidencyIssuedAt: '',
        ctcIssuedDate: '',
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
    this.setState({ editing: { ...this.state.editing, loading: true } })
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
    }

    post(`/police-clearance-certification/new`, applicantData)
    .then(([{certification}]) => {
      alert('Save Success');
      const [, rid] = certification['@rid'].split('#');
      window.location.href = `/certification-preview?id=${rid}`;
    })
    .catch(err => {
      alert(err.message);
      this.setState({ editing: { ...this.state.editing, loading: false, error: err.message } });
    });
  }
  componentDidMount() {
    this.setState({ navTabs: { ...this.state.navTabs, applicantInfo: 1 } });
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
          <div id="formContents" className="container">
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
                <div>
                  <ApplicantInfoSummary supreme={this} />
                  <hr />
                  <div className="container" align="right">
                    { this.state.editing.loading ?
                      <label>Please Wait, Record is on Processing...</label>
                      :
                      <button type="submit">
                        Save
                      </button>
                    }
                  </div>
                </div>
              }
            </form>
          </div>
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