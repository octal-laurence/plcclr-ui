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
                {k} :&nbsp;
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