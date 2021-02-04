import { combineReducers } from 'redux';
import auth from './auth/reducer';
import comic from './comic/reducer';
import modal from './modal/reducer';

export default combineReducers({ auth, comic, modal });
