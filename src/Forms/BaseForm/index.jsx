import React from 'react';
import StyledForm from './styles';

export default props => {
  return (
    <StyledForm>
      {props.children}
    </StyledForm>
  )
}
