import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'next/router';
import moment from 'moment';

import Wrapper from '../../wrapper';
import Layout from '../../layout';
import NavTabs from '../../components/navTabs';
import Box from '../../ui/box';
import InputLabel from 'pages/ui/inputLabel';
import Input from 'pages/ui/input';

import testData from './testData';

class Print extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      error: '',
      data: testData(),
    }
  }
  componentDidMount() {
    window.print()
  }
  render() {
    const certificateData = this.state.data;
    return (
      <Box
        withHorizontalPadding="lg"
      >
        <Box align="center">
          <p>HEADER LINE1 (Label)</p>
          <p>HEADER LINE2 (Division)</p>
          <p>HEADER LINE3 (Station)</p>
        </Box>
        <Box align="right">
          <p> Date: {` ${moment().format('L')}`} </p>
        </Box>
        <Box align="center">
          <h3>POLICE CLEARANCE</h3>
        </Box>
        <Box>
          <Box width="70%">
            <p>
              Sample text, Sample text, Sample text, Sample text, Sample text, Sample text, Sample text, Sample text
              Sample text, Sample text, Sample text, Sample text, Sample text, Sample text, Sample text, Sample text
            </p>
          </Box>
        </Box>
        <Box flexDirection="row">
          <Box width="70%" withHorizontalPadding="sm">
            <Box flexDirection="row" addSideMarginForChildren="lg"> 
              <InputLabel>NAME:</InputLabel>
              <label>
                {[ certificateData.applicant.firstName,
                   certificateData.applicant.middleName,
                   certificateData.applicant.lastName,
                   certificateData.applicant.suffix,
                ].join(' ')}
              </label>
            </Box>
            <Box flexDirection="row" addSideMarginForChildren="lg"> 
              <InputLabel>ADDRESS:</InputLabel>
              <label>
                {[ certificateData.applicant.address1,
                   certificateData.applicant.address2,
                   certificateData.applicant.barangay,
                   certificateData.applicant.city,
                   certificateData.applicant.province,
                   certificateData.applicant.postalCode,
                ]}
              </label>
            </Box>
            <Box flexDirection="row" addSideMarginForChildren="lg"> 
              <InputLabel>BIRTH DATE:</InputLabel>
              <label>{certificateData.applicant.dateBirth}</label>
            </Box>
            <Box flexDirection="row" addSideMarginForChildren="lg"> 
              <InputLabel>PLACE OF BIRTH:</InputLabel>
              <label>{certificateData.applicant.birthPlace}</label>
            </Box>
            <hr />
            <Box flexDirection="row" addSideMarginForChildren="lg"> 
              <InputLabel>Findings:</InputLabel>
              <label>{certificateData.findings}</label>
            </Box>
            <Box flexDirection="row" addSideMarginForChildren="lg"> 
              <InputLabel>Purpose:</InputLabel>
              <label>{certificateData.certificationEntry.purpose}</label>
            </Box>
            <Box flexDirection="row" addSideMarginForChildren="lg"> 
              <InputLabel>Validity:</InputLabel>
              <label>{certificateData.validity}</label>
            </Box>
            <Box flexDirection="row" addSideMarginForChildren="lg"> 
              <InputLabel>CTC Date Issued:</InputLabel>
              <label>{certificateData.applicant.ctcIssuedDate}</label>
            </Box>
          </Box>
          <Box width="30%" withHorizontalPadding="sm">
            <label>Identification:</label>
            <br />
            <Box height="150px" width="100%" flexDirection="row">
              <Box width="50%" align="center">
                <img
                  src={certificateData.applicant.applicantIDPhoto}
                  style={{
                    display: 'block',
                    width: '80%',
                    height: 'auto',
                    borderStyle: 'groove'
                  }}
                />
                <Box align="center">
                  ID Picture
                </Box>
              </Box>
              <Box width="50%" align="center">
                <img
                  src={`data:image/png;base64,${certificateData.applicant.applicantFingerPrints.rightThumb}`}
                  style={{
                    display: 'block',
                    width: '55%',
                    height: 'auto',
                    borderStyle: 'groove'
                  }}
                />
                <Box align="center">
                  Right Thumb
                </Box>
              </Box>
            </Box>
            <br />
            <Box>
              <Box align="center">
                <img
                  src={certificateData.applicant.applicantSignature}
                  style={{
                    display: 'block',
                    width: '50%',
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
        <hr />
        <Box flexDirection="row" addSideMarginForChildren="lg">
          <Box width="25%">
            Verified By:
            <InputLabel>
              {certificateData.verifiedBy.name}
            </InputLabel>
            <hr />
            <label>
              {certificateData.verifiedBy.title}
            </label>
          </Box>
          <Box width="25%">
            Certified By:
            <InputLabel>
              {certificateData.certifiedBy.name}
            </InputLabel>
            <hr />
            <label>
              {certificateData.certifiedBy.title}
            </label>
          </Box>
        </Box>
      </Box>
    );
  }
}

const InjectedRouter = withRouter(Print);
export default () => Wrapper(InjectedRouter);