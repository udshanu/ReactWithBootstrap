import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
//import rootReducer from '../reducers/rootReducer';
import { reducers } from '../reducers';
import rootReducer from "../store/reducers/rootReducer";

//export const store = createStore(reducers, compose(applyMiddleware(thunk)));

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));