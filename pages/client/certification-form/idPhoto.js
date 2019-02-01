import React from 'react';
import ReactDOM from 'react-dom';

import Box from '../../ui/box';
import Button from '../../ui/button';
import libCamera from '../../ui/library/webcam';

class IDPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.supreme = props.supreme;

    this.updateStateApplicantIDPhoto = this.updateStateApplicantIDPhoto.bind(this);
    this.cameraSnapshot = this.cameraSnapshot.bind(this);
  }
  switchCamera(control=true) {
    const cameraProjection = document.getElementById('cameraProjection');
      if (navigator.mediaDevices.getUserMedia) {       
        navigator.mediaDevices.getUserMedia({video: control})
        .then(function(stream) {
          cameraProjection.srcObject = stream;
        })
        .catch(function(error) {
          console.log("Something went wrong!");
        });
      }
  }
  updateStateApplicantIDPhoto(newState = {}) {
    const supreme = this.supreme;
    supreme.setState({
      applicantIDPhoto: {
        ...supreme.state.applicantIDPhoto,
        ...newState,
      }
    });
  } 
  cameraSnapshot() {
    const updateStateApplicantIDPhoto = this.updateStateApplicantIDPhoto;

    if (Webcam) {
      // take snapshot and get image data
      Webcam.snap( function(data_uri) {
        updateStateApplicantIDPhoto({
          blob: data_uri
        });
      });
    } else {
      alert("Camera is not ready");
    }
  }
  componentDidMount() {
    // this.switchCamera();
    libCamera(window);
    Webcam.set({
      width: 320,
      height: 240,
      image_format: 'jpeg',
      jpeg_quality: 90
    });
    Webcam.attach( '#my_camera' );
  }
  render() {
    const supreme = this.supreme;
    console.log(supreme.state.applicantIDPhoto.blob);

    return (
      <Box withVerticalPadding="md">
        <Box>
          <h3>
            ID Photo
          </h3>
          <p>
            Require Identification Image to be taken.
          </p>
        </Box><hr />
        <Box align="center">
          <Box
            addSideMarginForChildren="sm"
            flexDirection="row"
            width="100%"
            withVerticalPadding="sm"
          >
            <Box width="50%" align="center">
              <div id="my_camera"></div>
            </Box>
            <Box width="50%" align="center">
              <div id="results">
                <img src={supreme.state.applicantIDPhoto.blob} />
              </div>
              <input type="hidden" id="captured_text" />
            </Box>
          </Box>
          <Box
            addSideMarginForChildren="sm"
            flexDirection="row"
            width="200px"
            withVerticalPadding="sm"
          >
            <Box width="50%" align="center">
              <button
                type="button"
                onClick={this.cameraSnapshot}
              >
                capture
              </button>
            </Box>
            <Box width="50%" align="center">
              <button
                type="button"
                onClick={(e) => this.updateStateApplicantIDPhoto({
                  blob: ''
                })}
              >
                reset
              </button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button
            type="button"
            onClick={(e) => {
              this.supreme.switchPageHandler('applicantFingerPrint');
            }}
          >
            Confirm and Go to Next Tab
          </Button>
        </Box>
      </Box>
    );
  }
}

export default IDPhoto;