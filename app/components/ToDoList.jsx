var React = require('react');
var {connect} = require('react-redux');
import ToDo from 'ToDo';

export var ToDoList = React.createClass({
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
                    <ToDo key={todoItem.id} {...todoItem} />
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

export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(ToDoList);
