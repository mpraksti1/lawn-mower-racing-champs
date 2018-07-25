import { combineReducers } from 'redux';
import auth from './Auth';
import players from './Player';

export default combineReducers({
  players,
  auth,
});