import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';

import Box from '../../ui/box';
import InputText from '../../ui/inputText';
import Button from '../../ui/button';

class Signature extends React.Component {
  constructor(props) {
    super(props);

    this.supreme = props.supreme;

    this.state = {
      signatureBlob: '',
      librarySignatureController: 0,
      librarySignatureCapture: 0,
    }
  }
  componentDidMount() {
    this.setState({ librarySignatureController: 1 });
  }
  render() {
    const supreme = this.props.supreme;

    return (
      <Box withVerticalPadding="md">
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
          <div id="signature-pad" className="signature-pad">
            <div
              className="signature-pad--body"
              align="center"
            >
              <img 
                src={supreme.state.applicantSignature.blob}
                style={{
                  display: (supreme.state.applicantSignature.blob !== '') ? 'block' : 'none'
                }}
              />
              <canvas
                id="cvs-signature"
                style={{
                  borderStyle: 'groove',
                  display: !(supreme.state.applicantSignature.blob !== '') ? 'block' : 'none'
                }}
              ></canvas>
              
            </div>
            <div className="signature-pad--footer">
              <div className="description" align="center">Sign above</div>
              <div className="signature-pad--actions" align="center">
                <div>
                  <button
                    type="button"
                    className="button clear"
                    onClick={(e) => {
                      supreme.setState({
                        applicantSignature: {
                        ...supreme.state.applicantSignature,
                        blob: '',
                        },
                      }, () => {
                        window.signaturePad.clear();
                        this.setState({ librarySignatureCapture: 0 })
                      })
                    }}>
                      Clear
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="button"
                    onClick={(e) => {
                      var dataURL = window.signaturePad.toDataURL("image/jpeg");
                      if (dataURL !== 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCACWASwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=') {
                        supreme.setState({
                          applicantSignature: {
                          ...supreme.state.applicantSignature,
                          blob: dataURL,
                          },
                        }, () => this.setState({ librarySignatureCapture: 1 }));
                      } else {
                        alert('Signature is empty');
                      }
                    }}>
                      Capture
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
        <br />
        <Box>
          <Button
            type="button"
            onClick={(e) => {
              this.supreme.switchPageHandler('finalization');
            }}
          >
            Confirm and Go to Next Tab
          </Button>
        </Box>
        <Head>
          <script src="/static/sdk/signature/sigapp.js" />
        </Head>
      </Box>
    );
  }
}

export default Signature;