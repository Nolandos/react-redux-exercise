import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//IMPORT REDUCERS
import users from './usersRedux';

//COMBINE REDUCERS
const allReducers = combineReducers({
    users,
});

//CREATE STRORE
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // podłączenie stanu do narzędzia google

const store = createStore(
  allReducers, 
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;