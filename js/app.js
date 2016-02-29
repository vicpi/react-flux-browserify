'use strict';

let React = require('react');
let RouterModule = require('react-router');
let routes = require('./routes.js');
let Router = RouterModule.Router;

React.render(
  <Router>{routes}</Router>,
  document.getElementById('productsapp')
);
