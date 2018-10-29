import React from 'react';
import styled from 'styled-components';
import LinkButton from '../ui/linkButton';

const LongTextComponent = styled(({
  collapsed,
  ...otherProps
}) => <span {...otherProps} />).attrs({})`
  display: inline-block;
  max-width: 500px;
  white-space: ${props => (props.collapsed ? 'nowrap' : 'pre-wrap')};
  overflow: ${props => (props.collapsed ? 'hidden' : 'initial')};
  text-overflow: ${props => (props.collapsed ? 'ellipsis' : 'initial')};
`;

class LongText extends React.Component {
  constructor(props) {
    super(props);

    const isCollapse = (this.props.index < this.props.caseNotesLength - 5)
      && (this.props.text.length > 58); // TODO: really check the overflow

    this.state = {
      collapsed: isCollapse,
    };

    this.expandLongText = this.expandLongText.bind(this);
  }

  expandLongText() {
    this.setState({
      collapsed: false,
    });
  }

  render() {
    return (
      <div>
        <LongTextComponent
          collapsed={this.state.collapsed}
        >
          {this.props.text}
        </LongTextComponent>
        {this.state.collapsed && <br />}
        {this.state.collapsed &&
          <LinkButton onClick={() => { this.expandLongText(); }}>
            Show all text
          </LinkButton>
        }
      </div>
    );
  }
}

export default LongText;
