import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerList from '../../Components/PlayerList';
import Button from '../../Elements/Button';
import Text from '../../Elements/Text';

const headerNames = ['first_name', 'last_name', 'rating', 'handedness'];

const Roster = ({
  retrievePlayers, deletePlayer, players,
}) => (
  <div className="roster-page">
    <Text xlg sans block spaceAbove>Your LMRC Fantasy Team:</Text>
    <Text sm thin spaceBelow block>
      Add and remove players to create the perfect team, if your racers do well, so do you!
    </Text>
    <Text sm thin spaceBelow block>
      Try and pick racers with a good mixture of skill in handling, reaction time and,
      of course, a fast mower!
    </Text>
    <Button outline spaceBelow>
      <Link to="/player/new">
        <Text sm green>Add New</Text>
      </Link>
    </Button>
    <PlayerList
      headerNames={headerNames}
      retrievePlayers={retrievePlayers}
      deletePlayer={deletePlayer}
      players={players}
    />
  </div>
);

Roster.propTypes = {
  retrievePlayers: PropTypes.func.isRequired,
  deletePlayer: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Roster;
