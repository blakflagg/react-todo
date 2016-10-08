import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute,hashHistory} from 'react-router';
import Main from 'Main';
import TodoApp from 'TodoApp';

import * as actions from 'actions';
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
