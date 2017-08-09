var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require ('ToDoApp');

var actions = require('actions');
var store = require('configureStore').configure();

console.log('This is store', store);


store.subscribe(() => {
   console.log('New state', store.getState());
});

store.dispatch(actions.addToDo('ke-ke-ke'));
store.dispatch(actions.setSearchText('kdfvkdfv'));
store.dispatch(actions.toggleShowCompleted());

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
