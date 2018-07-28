import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

const Button = (props) => {
  const { children } = props;
  return (
    <StyledButton {...props}>{children}</StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
