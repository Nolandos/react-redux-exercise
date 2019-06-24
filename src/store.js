import { createStore } from 'redux';
import allReducers from './reducers';

const initialStore = {
    users: [],
    searchText: ''
}

export const store = createStore(allReducers, { counter: 0 });