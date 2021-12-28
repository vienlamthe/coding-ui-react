import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../utils/styles';

const COLOR_MAPPING = {
  primary: {
    background: '#32AB54',
    hover: '#277E3F',
    text: '#fff',
  },
  secondary: {
    background: '#0336FF',
    hover: '#0335ffe4',
    text: '#fff',
  },
  danger: {
    background: '#F13A29',
    hover: '#BD1A0B',
    text: '#fff',
  },
};

const SIZE_MAPPING = {
  large: {
    padding: '0 1.5rem',
    fontSize: '18px',
    height: '2.5rem',
    lineHeight: '26px',
  },
  medium: {
    padding: '0 1.25rem',
    fontSize: '16px',
    height: '2rem',
    lineHeight: '24px',
  },
};

const StyledButton = styled.button`
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
  outline: none;
  border-radius: ${({ rounded }) => (rounded ? '2rem' : '4px')};

  ${({ variant, outline }) => {
    const { background, hover, text } = COLOR_MAPPING[variant];
    return `
      color: ${outline ? background : text};
      background: ${outline ? '#fff' : background};
      border: ${outline ? `1px solid ${background}` : '0'};

      :hover {
        cursor: pointer;
        background: ${outline ? '#fff' : hover};
      }
    `;
  }}

  ${({ size }) => {
    const { height, padding, lineHeight, fontSize } = SIZE_MAPPING[size];
    return `
      height: ${height};
      padding: ${padding};
      font-size: ${fontSize};
      line-height: ${lineHeight};
    `;
  }}
`;

const Button = ({ label, variant, size, Icon, rounded, outline, onclick }) => {
  return (
    <StyledButton
      variant={variant}
      rounded={rounded}
      size={size}
      outline={outline}
      icon={Icon}
      onClick={onclick}
    >
      {Icon && <Icon color={colors.white} style={{ marginRight: '4px' }} />} {label}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  Icon: PropTypes.func,
  onclick: PropTypes.func,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'medium']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

Button.defaultProps = {
  label: 'Click me',
  variant: 'primary',
  size: 'large',
  rounded: false,
  outline: false,
};
