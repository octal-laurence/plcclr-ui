import React from 'react';
import ReactDOM from 'react-dom';

import Box from '../../ui/box';
import InputText from '../../ui/inputText';
import Button from '../../ui/button';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const supreme = this.props.supreme;
    const applicantInfo = {
      firstName: { label: 'first name' },
      lastName: { label: 'last name' },
      middleName: { label: 'middle name' },
      suffix: { label: 'suffix' },
      address1: { label: 'address1' },
      address2: { label: 'address2' },
      barangay: { label: 'barangay' },
      city: { label: 'city' },
      province: { label: 'province' },
      gender: { label: 'gender' },
      civilStatus: { label: 'civil status' },
      dateBirth: { label: 'birth date' },
      birthPlace: { label: 'birth place' },
      religion: { label: 'religion' },
      height: { label: 'height' },
      weight: { label: 'weight' },
      occupation: { label: 'occupation' },
      citizenship: { label: 'citizenship' },
      contactNumber: { label: 'contact number' },
      purpose: { label: 'purpose' },
      certResidency: { label: 'residencial certificate' },
      certResidencyIssuedAt: { label: 'issued at.' },
      ctcIssuedDate: { label: 'CTC issue date' },
    }

    return (
      <div>
        <Box>
          <h3>
            Summary
          </h3>
          <p>
            Information Summary
          </p>
        </Box>
        <hr />
        <Box>
          { Object.entries(supreme.state.applicantInfo)
            .map(([k, v]) => [(
              <Box key={k}>
                {applicantInfo[k].label} :&nbsp;
                <label><u>{v}</u></label>
              </Box>
            ), (<br />)].map((elem) => elem)) 
          }
        </Box>
      </div>
    );
  }
}

export default Summary;