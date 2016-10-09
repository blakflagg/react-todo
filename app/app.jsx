import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  'react-redux';
import {hashHistory} from 'react-router';
import router from  'app/router/';



import * as actions from 'actions';
import firebase from 'app/firebase/';

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        hashHistory.push('/todos');
    }else{
        hashHistory.push('/');
    }
})
var store = require('configureStore').configure();


store.dispatch(actions.startAddTodos());

//Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');




ReactDOM.render(
  <Provider store={store}>
      {router}
  </Provider>,
  document.getElementById('app')
);
