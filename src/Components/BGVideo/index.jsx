import React from 'react';
import PropTypes from 'prop-types';
import StyledVideo from './styles';

const BGVideo = (props) => {
  const { url } = props;

  return (
    <StyledVideo {...props}>
      <video autoPlay muted loop id="myVideo">
        <source src={url} type="video/mp4" />
      </video>
    </StyledVideo>
  );
};

BGVideo.defaultProps = {
  dark: false,
};

BGVideo.propTypes = {
  url: PropTypes.string.isRequired,
  dark: PropTypes.bool,
};

export default BGVideo;
