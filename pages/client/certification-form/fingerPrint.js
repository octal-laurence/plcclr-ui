import React from 'react';
import ReactDOM from 'react-dom';
import { NextScript } from 'next/document';
import Head from 'next/head';

import Box from '../../ui/box';
import InputText from '../../ui/inputText';
import Button from '../../ui/button';

class FingerPrint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fingerPrintSubj: '',
    };

    this.supreme = props.supreme;
    this.renderFingerPrintProjector = this.renderFingerPrintProjector.bind(this);
    this.saveFingerPrint = this.saveFingerPrint.bind(this);
  }
  componentDidUpdate() {
    if (this.state.fingerPrintSubj !== '') {
      window.REGIONFINGERPRINT.onStart();
    }
  }
  componentWillUnmount() {
    window.REGIONFINGERPRINT.onStop();
  }
  renderFingerPrintProjector() {
    const supreme = this.supreme;

    return (
      <Box flexDirection="row">
        <Box
          width="50%"
          borderStyle="groove"
          align="center"
        >
          <Box
            height="400px"
            borderStyle="groove"
          >
            <img
              height="396px"
              width="100%"
              src={supreme.state.applicantFingerPrint.leftThumb}
            />
          </Box>
          <Box>
            <button
              type="button"
              onClick={(e) => {
                this.setState({
                  fingerPrintSubj: 'leftThumb',
                });
              }}
            >
              Get Left Thumb
            </button>
          </Box>
        </Box>
        <Box
          width="50%"
          borderStyle="groove"
          align="center"
        >
          <Box
            height="400px"
            borderStyle="groove"
          >
            <img
              height="396px"
              width="100%"
              src={supreme.state.applicantFingerPrint.rightThumb}
            />
          </Box>
          <Box>
            <button
              type="button"
              onClick={(e) => {
                this.setState({
                  fingerPrintSubj: 'rightThumb',
                });
              }}
            >
              Get Right Thumb
            </button>
          </Box>
        </Box>
      </Box>
    );
  }
  renderFingerPrintScanner(thumb) {
    const supreme = this.props.supreme;

    return (
      <Box>
        <Box align="right">
          <button
            type="button"
            onClick={(e) => this.setState({ fingerPrintSubj: '' })}
          >
            close
          </button>
        </Box>
        <Box align="center">
          <h5>Scan {thumb} thumb</h5>
        </Box>
        <Box
          align="center"
          borderStyle="groove"
        >
          <div id="Scores">
            <h5>Scan Quality : <input type="text" id="qualityInputBox" size="20" /></h5> 
          </div>
          <div id="content-capture">    
            <div id="status"></div>            
            <Box
              id="imagediv"
              borderStyle="groove"
              height="400px"
              width="400px"
            >
            </Box>
            <div id="contentButtons">
              <input
                type="button"
                className="btn btn-primary"
                id="save"
                value="Save"
                onClick={this.saveFingerPrint}
              />
            </div>
            <div id="imageGallery">
            </div>
          </div>
        </Box>
      </Box>
    );
  }
  saveFingerPrint() {
    const supreme = this.supreme;
    const localStorage = window.REGIONFINGERPRINT.localStorage;

    if (localStorage.getItem("imageSrc") == "" ||
        localStorage.getItem("imageSrc") == null ||
        document.getElementById('imagediv').innerHTML == "") {
          alert("Error -> Fingerprint not available");
    } else {
      fetch(localStorage.getItem("imageSrc"))
      .then(res => res.blob())
      .then(blob => console.log(blob))
      .catch(err => console.log(err));

      supreme.setState({
        applicantFingerPrint: {
          ...supreme.state.applicantFingerPrint,
          [this.state.fingerPrintSubj]: localStorage.getItem("imageSrc"),
        }
      }, () => {
        window.REGIONFINGERPRINT.onStop();
        this.setState({ fingerPrintSubj: '' });
      });
    }
  }
  render() {
    return (
      <div>
        <Box>
          <h3>
            Finger Print
          </h3>
          <p>
            Require Finger Print to be taken.
          </p>
        </Box><hr />
        { (this.state.fingerPrintSubj === '') ?
            this.renderFingerPrintProjector()
            :
            this.renderFingerPrintScanner(this.state.fingerPrintSubj)
        }
        <br />
        <Box>
          <Button
            type="button"
            onClick={(e) => {
              this.supreme.switchPageHandler('applicantSignature');
            }}
          >
            Confirm and Go to Next Tab
          </Button>
        </Box>
        <Head>
          <script src="/static/sdk/fingerPrintScanner/customApp.js" />
        </Head>
      </div>
    );
  }
}

export default FingerPrint;