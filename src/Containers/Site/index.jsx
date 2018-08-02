import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '../../Pages/Home';
import Roster from '../../Pages/Roster';
import Player from '../../Pages/Player';
import DefaultPage from '../../Pages/404';
import ProtectedRoute from '../../Elements/ProtectedRoute';
import { logout } from '../../Store/Actions/Auth';
import { createPlayer, deletePlayer, retrievePlayers } from '../../Store/Actions/Player';
import StyledDiv from './styles';

window.localStorage.setItem('hasVisited', true);

const Site = (props) => {
  const {
    checkAuthStatus,
    createPlayerFunc,
    retrievePlayersFunc,
    deletePlayerFunc,
    isRequesting,
    players,
  } = props;

  return (
    <StyledDiv>
      <Switch>
        <ProtectedRoute
          isAllowed={checkAuthStatus()}
          exact
          path="/"
          component={Home}
        />
        <ProtectedRoute
          isAllowed={checkAuthStatus()}
          path="/roster"
          render={() => (
            <Roster
              {...props}
              players={players}
              retrievePlayers={retrievePlayersFunc}
              deletePlayer={deletePlayerFunc}
            />
          )}
        />
        <ProtectedRoute
          isAllowed={checkAuthStatus()}
          path="/player/new"
          render={() => (
            <Player
              {...props}
              createPlayer={createPlayerFunc}
              isRequesting={isRequesting}
            />
          )}
        />
        <Route component={DefaultPage} />
      </Switch>
    </StyledDiv>
  );
};

Site.propTypes = {
  // eslint-disable-next-line
  history: PropTypes.object.isRequired,
  logUserOut: PropTypes.func.isRequired,
  createPlayerFunc: PropTypes.func.isRequired,
  deletePlayerFunc: PropTypes.func.isRequired,
  retrievePlayersFunc: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  isRequesting: PropTypes.bool.isRequired,
  checkAuthStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  players: state.players.players,
  isRequesting: state.global.isRequesting,
});

const mapDispatchToProps = ({
  logUserOut: logout,
  createPlayerFunc: createPlayer,
  deletePlayerFunc: deletePlayer,
  retrievePlayersFunc: retrievePlayers,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Site));
