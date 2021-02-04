import { combineReducers } from 'redux';
import comic from './comic/reducer';
import modal from './modal/reducer';

export default combineReducers({ comic, modal });
