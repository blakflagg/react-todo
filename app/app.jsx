import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  'react-redux';
import {Route, Router, IndexRoute,hashHistory} from 'react-router';
import Login from 'Login';
import TodoApp from 'TodoApp';

import * as actions from 'actions';
var store = require('configureStore').configure();
import * as TodoAPI from './api/TodoAPI';

/*store.subscribe(() => {
    var state = store.getState();
    console.log('New state', state);
    TodoAPI.setTodos(state.todos);
});*/

/*var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));*/

store.dispatch(actions.startAddTodos());

//Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/">
            <Route path="todos" component={TodoApp}/>
                <IndexRoute component={Login}/>
            </Route>
      </Router>
  </Provider>,
  document.getElementById('app')
);
