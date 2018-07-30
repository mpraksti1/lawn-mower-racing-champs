import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAllowed, ...props }) => (
  isAllowed ? <Route {...props} /> : <Redirect to="/auth/login" />
);

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
