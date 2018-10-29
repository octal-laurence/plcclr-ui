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
      </div>
    );
  }
}

export default Summary;