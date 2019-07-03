import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//IMPORT REDUCERÓW
import users from './usersRedux';

//ŁĄCZENIE REDUCERÓW
const allReducers = combineReducers({
    users,
});

//CREATE STRORE

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers, 
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;