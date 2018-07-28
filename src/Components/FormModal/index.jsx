import React, { Component } from 'react';
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
import LoginForm from '../../Forms/Login';
import RegisterForm from '../../Forms/Register';
import PlayerForm from '../../Forms/Player';
import StyledDiv from './styles';

class FormModal extends Component {
  constructor(props) {
    super(props);

    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs() {
    const { location: { pathname }, isRequesting } = this.props;

    if (pathname !== '/player/new' && !isRequesting) {
      return (
        <div className="tab-wrapper">
          <NavLink to="/auth/register" className="tab-link area-left">
            <LockIcon />
            <Text thin sm sans gray>Register</Text>
          </NavLink>
          <NavLink to="/auth/login" className="tab-link area-right">
            <CreateIcon />
            <Text thin sm sans gray>Login</Text>
          </NavLink>
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      login,
      register,
      createPlayer,
      isRequesting,
    } = this.props;

    return (
      <StyledDiv>
        {this.renderTabs()}
        {
          isRequesting
            ? <Loader />
            : (
              <div className="forms-area">
                <Switch>
                  <Route
                    path="/auth/login"
                    render={props => (
                      <LoginForm
                        {...props}
                        login={login}
                      />
                    )}
                  />
                  <Route
                    path="/auth/register"
                    render={props => (
                      <RegisterForm
                        {...props}
                        register={register}
                      />
                    )}
                  />
                  <Route
                    path="/player/new"
                    render={props => (
                      <PlayerForm
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
  }
}

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
