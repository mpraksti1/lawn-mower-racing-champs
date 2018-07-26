import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../../Pages/Home';
import Roster from '../../Pages/Roster';
import Player from '../../Pages/Player';
import DefaultPage from '../../Pages/404';
import { logout } from '../../Store/Actions/Auth';
import { createPlayer, deletePlayer, retrievePlayers } from '../../Store/Actions/Player';
import StyledDiv from './styles';

const Site = props => {
  // Redirect away from all non-auth routes if not logged in
  const logoutAndRedirect = path => {
    props.logUserOut();
    props.history.push(path);
  }

  if (!window.localStorage.token) {
    logoutAndRedirect('/auth/register');
  } else if (window.localStorage.token && window.localStorage.expiresIn < Date.now()) {
    logoutAndRedirect('/auth/login');
  }

  const {
    createPlayerFunc,
    retrievePlayersFunc,
    deletePlayerFunc,
    isRequesting,
    players
  } = props;

  return (
    <StyledDiv>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/roster"
          render={(props) => (
            <Roster
              {...props}
              players={players}
              retrievePlayers={retrievePlayersFunc}
              deletePlayer={deletePlayerFunc}
            />
          )}
        />
        <Route
          path="/player/new"
          render={(props) => (
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

const mapDispatchToProps = ({
  logUserOut: logout,
  createPlayerFunc: createPlayer,
  deletePlayerFunc: deletePlayer,
  retrievePlayersFunc: retrievePlayers,
})

const mapStateToProps = state => ({
  players: state.players.players,
  isRequesting: state.global.isRequesting,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Site));
