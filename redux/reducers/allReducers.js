import {combineReducers} from 'redux';

import SearchReducer from './searchReducer.js';

const allReducers = combineReducers({
  SearchReducer:SearchReducer
});

export default allReducers
