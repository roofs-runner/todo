var React = require('react');
var ToDo = require('ToDo');

var ToDoList = React.createClass({
    render: function () {
        var todos = this.props.todos;
        var renderToDos = () => {
            if (todos.length === 0) {
                return(
                    <p className="container__message">Nothing to do</p>
                );
            }
            return todos.map((todoItem) => {
                return (
                    <ToDo key={todoItem.id} {...todoItem} onToggle={this.props.onToggle}/>
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