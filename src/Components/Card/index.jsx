import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Elements/Text';
import StyledDiv from './styles';

const Card = ({ children, title, copy }) => (
  <StyledDiv>
    <div className="icon">{children}</div>
    <Text sans block alignCenter xlg green>{title}</Text>
    <Text sans block alignCenter thin spaceAround>{copy}</Text>
  </StyledDiv>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
};

export default Card;
