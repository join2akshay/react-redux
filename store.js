import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import count from './reducer.js'

const rootReducer = combineReducers({count:count});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer)
    // const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))


export default store;
