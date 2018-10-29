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
    const supreme = this.supreme;
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

    return (
      <div>
        <Box>
          <h3>
            ID Photo
          </h3>
          <p>
            Require Identification Image to be taken.
          </p>
        </Box><hr />
        <Box flexDirection="row">
          <div className="row">
            <div className="col-sm-4">
              <div id="my_camera"></div>
            </div>

            <div className="col-sm-1"></div>

            <div className="col-sm-4">
              <div id="results">
                <img src={supreme.state.applicantIDPhoto.blob} />
              </div>
              <input type="hidden" id="captured_text" />
            </div>
          </div>
              
          <div className="row">
            <div className="col-sm-4">
              <input
                type="button"
                value="Take Snapshot"
                onClick={this.cameraSnapshot}
              />
              <br />
              <input
                type="button"
                value="Reset"
                onClick={(e) => this.updateStateApplicantIDPhoto({
                  blob: ''
                })}
              />
            </div>
          </div>
        </Box><br />
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
      </div>
    );
  }
}

export default IDPhoto;