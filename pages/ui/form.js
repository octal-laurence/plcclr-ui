import styled from 'styled-components';

const Form = styled.form`
  label, input {
    ${p => (p.inputWidth ? `width: ${p.inputWidth};` : '')}

    &:not(:last-child) {
      margin-bottom: ${props => props.theme.margin.md};
    }
  }
`;

export default Form;