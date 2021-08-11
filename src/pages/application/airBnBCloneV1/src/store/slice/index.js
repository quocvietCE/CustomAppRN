import {combineReducers} from 'redux';
import auth from './AuthSlice';
import app from './AppSlice';
import network from './NetworkSlice';

export default combineReducers({
  auth,
  app,
  network,
});
