import styled from 'styled-components';
import Field from './Field';
import { typography, colors } from '../../utils/styles';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid ${colors.gray5};
  ${typography.size.small}
  color: ${colors.gray1};
  ${({ rows }) =>
    rows
      ? `
    height: auto;
    padding: 0.5rem 1rem;
    resize: none;
    `
      : `
    height: 2.5rem;
    padding: 0 1rem;
    resize: none;
  `}
  ${({ hasIcon }) => (hasIcon ? 'padding-left: 3rem;' : '')}
  ${({ hasError }) => (hasError ? `border-color: ${colors.red};` : '')}

  :placeholder {
    color: ${colors.gray5};
  }
  :focus {
    border-color: ${colors.gray1};
    outline: none;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 0.5rem;
`;

const Input = ({ placeholder, icon, rows, ...restProps }) => (
  <Field {...restProps}>
    {({ input, meta }) => (
      <div style={{ position: 'relative' }}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <StyledInput
          as={rows ? 'textarea' : 'input'}
          rows={rows}
          type="text"
          hasIcon={icon}
          hasError={meta.error && meta.touched}
          id={input.name}
          placeholder={placeholder}
          {...input}
        />
      </div>
    )}
  </Field>
);

export default Input;
