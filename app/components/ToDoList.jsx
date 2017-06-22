var React = require('react');
var ToDo = require('ToDo');

var ToDoList = React.createClass({
    render: function () {
        var todos = this.props.todos;
        var renderToDos = () => {
            return todos.map((todoItem) => {
                return (
                    <ToDo key={todoItem.id} {...todoItem}/>
                )
            })
        };
        return (
            <div>
                {renderToDos()}
            </div>
        )
    }
});

module.exports = ToDoList;