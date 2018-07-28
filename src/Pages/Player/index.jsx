import React from 'react';
import PropTypes from 'prop-types';
import BGVideo from '../../Components/BGVideo';
import FormModal from '../../Components/FormModal';

const Player = (props) => {
  const { isRequesting, createPlayer } = props;

  return (
    <div className="player-page">
      <BGVideo dark url="/assets/video/bgvid.mp4" />
      <FormModal createPlayer={createPlayer} isRequesting={isRequesting} />
    </div>
  );
};

Player.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  createPlayer: PropTypes.func.isRequired,
};

export default Player;
