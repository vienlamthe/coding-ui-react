import Field from './Field';
import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';

const StyledRadio = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
  ~ span {
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    border: 1.5px ${({ hasError }) => (hasError ? colors.red : colors.gray1)} solid;
    margin: 0.125rem 0.625rem 0.125rem 0.125rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
  :checked ~ span:before {
    content: '';
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    border-radius: 50%;
    background-color: ${colors.blue};
  }
`;

const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  ${typography.size.small}
  color: ${colors.gray1};
  :not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const Radio = ({ label, ...restProps }) => (
  <Field {...restProps}>
    {({ input, meta }) => (
      <StyledLabel>
        <StyledRadio hasError={meta.touched && meta.error} {...input} />
        <span />
        {label}
      </StyledLabel>
    )}
  </Field>
);

export default Radio;
