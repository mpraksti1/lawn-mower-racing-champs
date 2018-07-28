import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BGVideo from '../../Components/BGVideo';
import FormModal from '../../Components/FormModal';
import {
  login,
  register,
} from '../../Store/Actions/Auth';

const Auth = ({ registerFunc, loginFunc, isRequesting }) => (
  <div>
    <BGVideo url="/assets/video/bgvid.mp4" dark />
    <FormModal register={registerFunc} login={loginFunc} isRequesting={isRequesting} />
  </div>
);

Auth.propTypes = {
  loginFunc: PropTypes.func.isRequired,
  registerFunc: PropTypes.func.isRequired,
  isRequesting: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  loginFunc: login,
  registerFunc: register,
};

const mapStateToProps = state => ({
  isRequesting: state.global.isRequesting,
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
