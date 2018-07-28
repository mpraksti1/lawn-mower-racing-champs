import React from 'react';
import PropTypes from 'prop-types';
import Centered from '../../Elements/Centered';
import StyledDiv from './styles';

const Hero = (props) => {
  const { imgUrl, children } = props;

  return (
    <StyledDiv imgUrl={imgUrl}>
      <Centered>
        { children }
      </Centered>
    </StyledDiv>
  );
};

Hero.defaultProps = {
  imgUrl: '',
};

Hero.propTypes = {
  imgUrl: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Hero;
