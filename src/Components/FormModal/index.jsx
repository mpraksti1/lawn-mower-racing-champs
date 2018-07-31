import React from 'react';
import {
  Route,
  Switch,
  NavLink,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import LockIcon from 'react-icons/lib/md/lock';
import CreateIcon from 'react-icons/lib/md/create';
import Text from '../../Elements/Text';
import Loader from '../../Elements/Loader';
import Login from '../../Forms/Login';
import Register from '../../Forms/Register';
import Player from '../../Forms/Player';
import StyledDiv from './styles';

const FormModal = (props) => {
  const {
    login,
    register,
    createPlayer,
    isRequesting,
    location: { pathname },
  } = props;

  const checkTabStatus = () => pathname !== '/player/new' && !isRequesting;

  return (
    <StyledDiv {...props}>
      {
        checkTabStatus() && (
          <div className="tab-wrapper">
            <NavLink to="/auth/register" className="tab-link area-left">
              <LockIcon />
              <Text {...props} thin sm sans gray>Register</Text>
            </NavLink>
            <NavLink to="/auth/login" className="tab-link area-right">
              <CreateIcon />
              <Text {...props} thin sm sans gray>Login</Text>
            </NavLink>
          </div>
        )
      }
      {
        isRequesting
          ? <Loader />
          : (
            <div className="forms-area">
              <Switch>
                <Route
                  path="/auth/login"
                  render={() => (
                    <Login
                      {...props}
                      login={login}
                    />
                  )}
                />
                <Route
                  path="/auth/register"
                  render={() => (
                    <Register
                      {...props}
                      register={register}
                    />
                  )}
                />
                <Route
                  path="/player/new"
                  render={() => (
                    <Player
                      {...props}
                      createPlayer={createPlayer}
                    />
                  )}
                />
              </Switch>
            </div>
          )
      }
    </StyledDiv>
  );
};

FormModal.defaultProps = {
  login: () => {},
  register: () => {},
  createPlayer: () => {},
  pathname: '',
};

FormModal.propTypes = {
  // eslint-disable-next-line
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
  isRequesting: PropTypes.bool.isRequired,
  login: PropTypes.func,
  register: PropTypes.func,
  createPlayer: PropTypes.func,
};

export default withRouter(FormModal);
