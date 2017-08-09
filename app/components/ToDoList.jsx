var React = require('react');
var {connect} = require('react-redux');
import ToDo from 'ToDo';
var todoAPI = require('ToDoAPI');

export var ToDoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        var renderToDos = () => {
            if (todos.length === 0) {
                return(
                    <p className="container__message">Nothing to do</p>
                );
            }
            return todoAPI.filterTodos(todos, showCompleted, searchText).map((todoItem) => {
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
        return state;
    }
)(ToDoList);
