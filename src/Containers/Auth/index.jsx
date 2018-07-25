import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const Auth = () => (
  <div>
    Auth
  </div>
);

// still to come
// Auth.propTypes = {
//   loginFunc: PropTypes.func.isRequired,
//   registerFunc: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = {
//   loginFunc: login,
//   registerFunc: register,
// };

export default connect(null, {})(Auth);


