var React = require('react');
var ToDoList = require('ToDoList');
var AddToDoForm = require('AddToDoForm');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
            {
                id: uuid(),
                text: 'Walk the dog'
            },
            {
                id: uuid(),
                text: 'Clean apartment'
            }]
        }
    },
    handleAddToDo: function (text) {
        this.setState({
           todos: [
               ...this.state.todos,
               {
                   id: uuid(),
                   text: text
               }
           ]
        });
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