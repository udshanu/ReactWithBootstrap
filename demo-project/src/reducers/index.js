import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';

export const reducers = combineReducers({
    registerReducer : registerReducer
})