import React from 'react';

// UI
import Container from './container';
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
        style={{ bottom: 0, position: 'fixed', top: 0, zIndex: 100 }}
        width={250}
      >
      </Container>
    )
  }
}

export default Sidebar;