import React from 'react';

// UI
import Container from './container';
import NavLinks from './navLinks';
import Header from '../ui/header';
import theme from '../ui/styles/theme';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleDropdown() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
    });
  }
  render() {
    return (
      <Container
        backgroundColor={theme.colors.primary}
        color={theme.colors.white}
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          position: 'fixed',
          zIndex: 100 }}
        width={300}
      >
        <Header centered>PLCCLR</Header>
        <Container>
          <NavLinks checkNavLink />
        </Container>
      </Container>
    )
  }
}

export default Sidebar;