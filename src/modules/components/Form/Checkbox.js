import Field from './Field';
import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';


const StyledLabel = styled.label`
  padding-left: 35px;
  position: relative;
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translatey(-50%);
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 1px solid ${colors.gray1};
    border-radius: 4px;
  }
  ::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    width: 11px;
    height: 4px;
    transform: rotate(-45deg);
    border-left: 3px solid ${colors.blue};
    border-bottom: 3px solid ${colors.blue};
    opacity: 0;
    visibility: hidden;
    transition: 0.25s linear;
  }
`;

const StyledCheckbox = styled.input`
  display: none;
  :checked + ${StyledLabel}::after {
    opacity: 1;
    visibility: visible;
  }
`;

const Checkbox = ({ label, ...restProps }) => {
  return (
    <Field {...restProps}>
      {({ input, meta }) => (
        <div style={{ marginBottom: '15px' }}>
          <StyledCheckbox
            id={input.name}
            hasError={meta.touched && meta.error}
            {...input}
          />
          <StyledLabel htmlFor={input.name}>{label}</StyledLabel>
        </div>
      )}
    </Field>
  );
}

export default Checkbox;
