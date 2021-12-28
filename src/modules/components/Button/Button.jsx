import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const COLOR_MAPPING = {
  primary: {
    background: '#32AB54',
    hover: '#277E3F',
    text: '#fff'
  },
  secondary: {
    background: '#E0E0E0',
    hover: '#E0E0E0',
    text: '#333'
  },
  danger: {
    background: '#F13A29',
    hover: '#BD1A0B',
    text: '#fff'
  }
}

const SIZE_MAPPING = {
  large: {
    padding: '0 2rem',
    fontSize: '18px',
    height: '2.5rem',
    lineHeight: '26px'
  },
  medium: {
    padding: '0 1.25rem',
    fontSize: '16px',
    height: '2rem',
    lineHeight: '24px'
  }
}

const StyledButton = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  border: 0;
  outline: none;

  ${({variant}) => {
    const { background, hover, text } = COLOR_MAPPING[variant]
    return `
      color: ${text};
      background: ${background};

      :hover {
        cursor: pointer;
        background: ${hover};
      }
    `
  }}

  ${({size}) => {
    const { height, padding, lineHeight, fontSize } = SIZE_MAPPING[size]
    return `
      height: ${height};
      padding: ${padding};
      font-size: ${fontSize};
      line-height: ${lineHeight};
    `
  }}
`

const Button = ({ label, variant, size }) => {
  return (
    <StyledButton variant={variant} size={size}>{label}</StyledButton>
  );
};

export default Button

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'medium']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger'])
};

Button.defaultProps = {
  label: 'Placeholder for Button',
  variant: 'primary',
  size: 'large',
};
