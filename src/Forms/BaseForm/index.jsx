import React from 'react';
import PropTypes from 'prop-types';
import StyledForm from './styles';

const BaseForm = (props) => {
  const { children } = props;
  return (
    <StyledForm>
      {children}
    </StyledForm>
  );
};

BaseForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseForm;
