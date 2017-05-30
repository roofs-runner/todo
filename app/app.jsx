var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require ('ToDoApp');

//Include foundation
require('style!css!foundation-sites/dist/css/foundation.css');
$(document).foundation();

//Custom styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <ToDoApp />,
    document.getElementById('app')
);
