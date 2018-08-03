//importing React modules
import React from 'react';
import ReactDOM from 'react-dom';

//importing Views
import MovieScreen from './src/views/movieScreen.jsx'

//importing Redux modules
import {Provider} from 'react-redux';
import {createStore} from 'redux';

//importing allReducers
import allReducers from './redux/reducers/allReducers.js'

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <MovieScreen />
  </Provider>, document.getElementById('app'));
