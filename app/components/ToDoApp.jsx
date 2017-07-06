var React = require('react');
var ToDoList = require('ToDoList');
var AddToDoForm = require('AddToDoForm');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
            {
                id: 1,
                text: 'Walk the dog'
            },
            {
                id: 2,
                text: 'Clean apartment'
            }]
        }
    },
    handleAddToDo: function (text) {
        alert('new todo ' + text);
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch}/>
                <ToDoList todos = {todos}/>
                <AddToDoForm onAddToItem = {this.handleAddToDo}/>
            </div>
        )
    }
});

module.exports = ToDoApp;