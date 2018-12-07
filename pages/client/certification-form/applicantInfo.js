import React from 'react';
import ReactDOM from 'react-dom';

import Box from '../../ui/box';
import InputText from '../../ui/inputText';
import Input from '../../ui/input';
import InputLabel from '../../ui/inputLabel';
import Button from '../../ui/button';

class ApplicantInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    const {name} = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.props.supreme.applicantInfoInputHandler(name, value);
  }
  render() {
    const supreme = this.props.supreme;
    const applicantInfo = supreme.state.applicantInfo;
    return (
      <Box withVerticalPadding="md">
        <h3>
          Applicant Form
        </h3>
        <p>
          Input Applicant Personal Details
        </p>
        <hr />
        <Box>
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              First Name:
              <Input
                fullWidth
                name="firstName"
                onChange={this.handleInputChange}
                value={applicantInfo.firstName}
              />
            </InputLabel>
            <InputLabel width="350px">
              Middle Name:
              <Input
                fullWidth
                name="middleName"
                onChange={this.handleInputChange}
                value={applicantInfo.middleName}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              Last Name:
              <Input
                fullWidth
                name="lastName"
                onChange={this.handleInputChange}
                value={applicantInfo.lastName}
              />
            </InputLabel>
            <InputLabel width="350px">
              Suffix:
              <Input
                fullWidth
                name="suffix"
                onChange={this.handleInputChange}
                value={applicantInfo.suffix}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              Address1:
              <Input
                fullWidth
                name="address1"
                onChange={this.handleInputChange}
                value={applicantInfo.address1}
              />
            </InputLabel>
            <InputLabel width="350px">
              Address2:
              <Input
                fullWidth
                name="address2"
                onChange={this.handleInputChange}
                value={applicantInfo.address2}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              Barangay:
              <Input
                fullWidth
                name="barangay"
                onChange={this.handleInputChange}
                value={applicantInfo.barangay}
              />
            </InputLabel>
            <InputLabel width="350px">
              City:
              <Input
                fullWidth
                name="city"
                onChange={this.handleInputChange}
                value={applicantInfo.city}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              Province:
              <Input
                fullWidth
                name="province"
                onChange={this.handleInputChange}
                value={applicantInfo.province}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              Gender:
              <Input
                fullWidth
                name="gender"
                onChange={this.handleInputChange}
                value={applicantInfo.gender}
              />
            </InputLabel>
            <InputLabel width="350px">
              Civil status:
              <Input
                fullWidth
                name="civilStatus"
                onChange={this.handleInputChange}
                value={applicantInfo.civilStatus}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              Date of Birth:
              <Input
                fullWidth
                type="date"
                name="dateBirth"
                onChange={this.handleInputChange}
                value={applicantInfo.dateBirth}
              />
            </InputLabel>
            <InputLabel width="350px">
              Religion:
              <Input
                fullWidth
                name="religion"
                onChange={this.handleInputChange}
                value={applicantInfo.religion}
              />
            </InputLabel>
            <InputLabel width="350px">
              Birth Place:
              <Input
                fullWidth
                name="birthPlace"
                onChange={this.handleInputChange}
                value={applicantInfo.birthPlace}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="150px">
              Height:
              <Input
                fullWidth
                name="height"
                onChange={this.handleInputChange}
                value={applicantInfo.height}
              />
            </InputLabel>
            <InputLabel width="150px">
              Weight:
              <Input
                fullWidth
                name="weight"
                onChange={this.handleInputChange}
                value={applicantInfo.weight}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              Occupation:
              <Input
                fullWidth
                name="occupation"
                onChange={this.handleInputChange}
                value={applicantInfo.occupation}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              Citizenship:
              <Input
                fullWidth
                name="citizenship"
                onChange={this.handleInputChange}
                value={applicantInfo.citizenship}
              />
            </InputLabel>
            <InputLabel width="350px">
              Contact No.:
              <Input
                fullWidth
                name="contactNumber"
                onChange={this.handleInputChange}
                value={applicantInfo.contactNumber}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              Purpose:
              <Input
                fullWidth
                name="purpose"
                onChange={this.handleInputChange}
                value={applicantInfo.purpose}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              Residence Cert:
              <Input
                fullWidth
                name="certResidency"
                onChange={this.handleInputChange}
                value={applicantInfo.certResidency}
              />
            </InputLabel>
            <InputLabel width="350px">
              Issued At:
              <Input
                fullWidth
                name="certResidencyIssuedAt"
                onChange={this.handleInputChange}
                value={applicantInfo.certResidencyIssuedAt}
              />
            </InputLabel>
          </Box><br />
          <Box flexDirection="row" addSideMarginForChildren="sm">
            <InputLabel width="350px">
              CTC Date Issued:
              <Input
                fullWidth
                type="date"
                name="ctcIssuedDate"
                onChange={this.handleInputChange}
                value={applicantInfo.ctcIssuedDate}
              />
            </InputLabel>
          </Box><br />
          <Box>
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                supreme.switchPageHandler('applicantIDPhoto');
              }}
            >
              Confirm and Go to Next Tab
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default ApplicantInfo;