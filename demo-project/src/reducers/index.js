import { combineReducers } from 'redux';
import { dCandidate } from './dCandidate';
import { registerReducer } from './registerReducer';

export const reducers = combineReducers({
    dCandidate: dCandidate,
    registerReducer : registerReducer
})