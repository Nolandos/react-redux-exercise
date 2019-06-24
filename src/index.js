import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return { ...state, users: action.users};
    default:
      return state;
    }
};

const initialState = {
    users: []
}

const store = createStore(reducer, initialState);


render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);
