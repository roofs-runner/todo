var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Include foundation
require('style!css!foundation-sites/dist/css/foundation.css');
$(document).foundation();

//Custom styles
require('style!css!sass!applicationStyles');

ReactDOM.render(

    <p>Boilerplate3</p>,
    document.getElementById('app')
);