import { combineReducers } from 'redux';
import auth from './Auth';
import players from './Player';
import global from './Global';

export default combineReducers({
  global,
  players,
  auth,
});
