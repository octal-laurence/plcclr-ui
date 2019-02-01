import React from 'react';
import styled from 'styled-components';

// UI
import Button from './button';
import Box from './box';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;

  display: ${props => props.show ? `block` : `none`};
`;

const ModalMain = styled.div`
  position:fixed;
  background: white;
  width: 50%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 20px 20px;
`;

class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div>
        { !this.state.show ?
          ( <Button onClick={() => {
              this.setState({
                show: true
              })
            }}>
              {this.props.btnName || `Open`}
            </Button>
          ) 
          :
          ( <ModalContainer show={this.state.show}>
              <ModalMain>
                <div width="100%">
                  <span>
                    <button
                      width="5%"
                      type="button"
                      onClick={() => {
                        this.setState({
                          show: false,
                        });
                      }}
                    >
                      x
                    </button>
                  </span>
                </div>
                <hr />
                { this.props.children }
                <Box withVerticalPadding="sm" withHorizontalPadding="md">
                  <Button
                    id="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.submit()
                      .then(result => {
                        this.setState({
                          show: false,
                        });
                      })
                      .catch(e => {
                        this.setState({
                          show: false,
                        });
                      });
                    }}
                  >
                    OK              
                  </Button>
                </Box>
              </ModalMain>
            </ModalContainer>
          )
        }
      </div>
    )
  }
}

export default ModalBox;