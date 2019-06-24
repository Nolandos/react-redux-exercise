import helloReducer from './helloReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    helloReducer: helloReducer
})

export default allReducers;