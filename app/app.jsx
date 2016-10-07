import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute,hashHistory} from 'react-router';
import Main from 'Main';
import TodoApp from 'TodoApp';


//Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
