import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';

import Wrapper from '../../wrapper';
import Layout from '../../components/layout';
import NavTabs from '../../components/navTabs';

import Box from '../../ui/box';
import InputText from '../../ui/inputText';
import Button from '../../ui/button';

import ApplicantInfo from './applicantInfo';
import ApplicantIDPhoto from './idPhoto';
import ApplicantFingerPrint from './fingerPrint';
import ApplicantSignature from './signature';
import ApplicantInfoSummary from './summary';

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
      tab: 'summary',
      label: 'Summary',
    }];

    this.state = {
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

    this.setState({
      navTabs: {
        ...navTabsStat,
        [tab]: 1
      }
    });
  }
  componentDidMount() {
    this.switchPageHandler('applicantInfo');
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
      <Layout>
        <Box className="container">
          { this.renderNavTabs() }
          <div id="formContents" className="container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(this.state);
              }}
            >
              { this.state.navTabs.applicantInfo === 1 && 
                <ApplicantInfo
                  applicantInfoInputHandler={this.applicantInfoInputHandler}
                  switchPageHandler={() => this.switchPageHandler(this.navTabs[1].tab)} 
                  applicantInfo={this.state.applicantInfo}
                /> 
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
              { this.state.navTabs.summary === 1 &&
                <ApplicantInfoSummary />
              }
              <hr />
              <div className="container" align="right">
                <button type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Layout>
    );
  }
}

const InjectedRouter = withRouter(CertificationForm);

export default () => Wrapper(InjectedRouter);