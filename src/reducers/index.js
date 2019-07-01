import getUsers from './getUsers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    getUsers,
});

export default allReducers;

