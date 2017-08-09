var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require ('ToDoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var todoAPI = require('ToDoAPI');

console.log('This is store', store);


store.subscribe(() => {
    var state = store.getState();
   console.log('New state', state);
   todoAPI.setTodos(state.todos);
});

var initialTodos = todoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//Include foundation
require('style!css!foundation-sites/dist/css/foundation.css');
$(document).foundation();

//Custom styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
       <ToDoApp />
    </Provider>,
    document.getElementById('app')
);
