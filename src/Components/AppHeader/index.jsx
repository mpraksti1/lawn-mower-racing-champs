import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../Elements/Button';
import StyledHeader from './styles';
import {
  logout,
} from '../../Store/Actions/Auth';

export class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.generateNavigation = this.generateNavigation.bind(this);
    this.logUserOut = this.logUserOut.bind(this);
  }

  logUserOut() {
    const { logoutUser, history } = this.props;

    logoutUser();
    history.push('/auth/login');
  }

  generateNavigation() {
    return (
      <nav className="nav">
        <NavLink exact to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/roster" className="nav-link">
          Roster
        </NavLink>
        <Button islink inline className="nav-link logout" onClick={this.logUserOut}>
          Logout
        </Button>
      </nav>
    );
  }

  render() {
    const { checkAuthStatus } = this.props;
    return (
      <StyledHeader>
        <p className="logo">
          <img className="logo-img" src="/assets/images/logo.png" alt="logo" />
          <span className="logo-text">LMRC</span>
        </p>
        {checkAuthStatus() && this.generateNavigation()}
      </StyledHeader>
    );
  }
}

AppHeader.defaultProps = {
  checkAuthStatus: () => false,
};

AppHeader.propTypes = {
  // eslint-disable-next-line
  history: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  checkAuthStatus: PropTypes.func,
};

const mapDispatchToProps = {
  logoutUser: logout,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(AppHeader),
);
