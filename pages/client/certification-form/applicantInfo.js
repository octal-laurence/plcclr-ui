import React from 'react';
import ReactDOM from 'react-dom';

import Box from '../../ui/box';
import InputText from '../../ui/inputText';
import Button from '../../ui/button';

class ApplicantInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    const {name} = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.props.applicantInfoInputHandler(name, value);
  }
  render() {
    const applicantInfo = this.props.applicantInfo;
    return (
      <div padding="100px">
        <h3>
          Applicant Form
        </h3>
        <p>
          Input Applicant Personal Details
        </p>
        <hr />
        <Box>
          <Box>
            First Name:&nbsp;
            <InputText
              name="firstName"
              onChange={this.handleInputChange}
              value={applicantInfo.firstName}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            Middle Name:&nbsp;
            <InputText
              name="middleName"
              onChange={this.handleInputChange}
              value={applicantInfo.middleName}
            />
          </Box><br />
          <Box>
            Last Name:&nbsp;
            <InputText
              name="lastName"
              onChange={this.handleInputChange}
              value={applicantInfo.lastName}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            Suffix:&nbsp;
            <InputText
              name="suffix"
              onChange={this.handleInputChange}
              value={applicantInfo.suffix}
            />
          </Box><br />
          <Box>
            Address1:&nbsp;
            <InputText
              name="address1"
              onChange={this.handleInputChange}
              value={applicantInfo.address1}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            Address2:&nbsp;
            <InputText
              name="address2"
              onChange={this.handleInputChange}
              value={applicantInfo.address2}
            />
          </Box><br />
          <Box>
            Barangay:&nbsp;
            <InputText
              name="barangay"
              onChange={this.handleInputChange}
              value={applicantInfo.barangay}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            City:&nbsp;
            <InputText
              name="city"
              onChange={this.handleInputChange}
              value={applicantInfo.city}
            />
          </Box><br />
          <Box>
            Province:&nbsp;
            <InputText
              name="province"
              onChange={this.handleInputChange}
              value={applicantInfo.province}
            />
          </Box><br />
          <Box>
            Gender:&nbsp;
            <InputText
              name="gender"
              onChange={this.handleInputChange}
              value={applicantInfo.gender}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            Civil Status:&nbsp;
            <InputText
              name="civilStatus"
              onChange={this.handleInputChange}
              value={applicantInfo.civilStatus}
            />
          </Box><br />
          <Box>
            Date of Birth:&nbsp;
            <InputText
              name="dateBirth"
              onChange={this.handleInputChange}
              value={applicantInfo.dateBirth}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            Birth Place:&nbsp;
            <InputText
              name="birthPlace"
              onChange={this.handleInputChange}
              value={applicantInfo.birthPlace}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            Religion:&nbsp;
            <InputText
              name="religion"
              onChange={this.handleInputChange}
              value={applicantInfo.religion}
            />
          </Box><br />
          <Box>
            Height:&nbsp;
            <InputText
              name="height"
              onChange={this.handleInputChange}
              value={applicantInfo.height}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            Weight:&nbsp;
            <InputText
              name="weight"
              onChange={this.handleInputChange}
              value={applicantInfo.weight}
            />
          </Box><br />
          <Box>
            Occupation:&nbsp;
            <InputText
              name="occupation"
              onChange={this.handleInputChange}
              value={applicantInfo.occupation}
            />
          </Box><br />
          <Box>
            Citizenship:&nbsp;
            <InputText
              name="citizenship"
              onChange={this.handleInputChange}
              value={applicantInfo.citizenship}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            Contact No.
            <InputText
              name="contactNumber"
              onChange={this.handleInputChange}
              value={applicantInfo.contactNumber}
            />
          </Box><br />
          <Box>
            Purpose:&nbsp;
            <InputText
              name="purpose"
              onChange={this.handleInputChange}
              value={applicantInfo.purpose}
            />
          </Box><br />
          <Box>
            Residence Cert:&nbsp;
            <InputText
              name="residence"
              onChange={this.handleInputChange}
              value={applicantInfo.residence}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            Issued At:&nbsp;
            <InputText
              name="certResidencyIssuedAt"
              onChange={this.handleInputChange}
              value={applicantInfo.certResidencyIssuedAt}
            />
          </Box><br />
          <Box>
            CTC Date Issued:&nbsp;
            <InputText
              name="ctcIssuedDate"
              onChange={this.handleInputChange}
              value={applicantInfo.ctcIssuedDate}
            />
          </Box><br />
          <Box>
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                this.props.switchPageHandler();
              }}
            >
              Confirm and Go to Next Tab
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}

export default ApplicantInfo;