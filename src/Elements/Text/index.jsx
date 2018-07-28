import React from 'react';
import PropTypes from 'prop-types';
import StyledText from './styles';

const Text = (props) => {
  const { children } = props;
  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
