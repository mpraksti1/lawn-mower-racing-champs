import React from 'react';
import PropTypes from 'prop-types';
import StyledDiv from './styles';

const Centered = (props) => {
  const { children } = props;

  return (
    <StyledDiv {...props}>
      {children}
    </StyledDiv>
  );
};

Centered.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Centered;
