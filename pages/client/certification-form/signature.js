import React from 'react';
import ReactDOM from 'react-dom';

import Box from '../../ui/box';
import InputText from '../../ui/inputText';
import Button from '../../ui/button';

class Signature extends React.Component {
  constructor(props) {
    super(props);

    this.supreme = props.supreme;
  }
  render() {
    return (
      <div>
        <Box>
          <h3>
            Signature
          </h3>
          <p>
            Write Digital Signature.
          </p>
        </Box>
        <hr />
        <Box>
          Content...
        </Box>
        <br />
        <Box>
          <Button
            type="button"
            onClick={(e) => {
              this.supreme.switchPageHandler('summary');
            }}
          >
            Confirm and Go to Next Tab
          </Button>
        </Box>
      </div>
    );
  }
}

export default Signature;