import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Elements/Text';
import StyledDiv from './styles';

const Card = (props) => {
  const {
    children,
    title,
    copy,
  } = props;

  return (
    <StyledDiv {...props}>
      <div className="icon">{children}</div>
      <Text className="title" sans block alignCenter xlg>{title}</Text>
      <Text className="copy" sans block alignCenter thin spaceAround>{copy}</Text>
    </StyledDiv>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

export default Card;
