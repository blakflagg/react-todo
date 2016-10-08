import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  'react-redux';
import {Route, Router, IndexRoute,hashHistory} from 'react-router';
import Main from 'Main';
import TodoApp from 'TodoApp';

import * as actions from 'actions';
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});



//Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
      <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
