import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return { ...state, users: action.users};
    case 'GET_DATA_REQUESTED':
      return {...state, loading: true, users:[]};
    case 'GET_DATA_DONE':
      return {...state, loading: false};
    default:
      return state;
    }
};

const initialState = {
    users: [],
    loading: false
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
  );


render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);
