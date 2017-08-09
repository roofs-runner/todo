var React = require('react');
var {connect} = require ('react-redux');
var actions = require('actions');

export var AddToDoForm = React.createClass({
  onSubmit: function (e) {
      e.preventDefault();
      var {dispatch} = this.props;
      var todoItem = this.refs.todo.value;

      if (todoItem.length > 0) {
          this.refs.todo.value = '';
          dispatch(actions.addToDo(todoItem));
      } else {
          this.refs.todo.focus();
      }
  },
  render: function () {
      return (
          <div className="container__footer">
              <form ref="form" onSubmit={this.onSubmit} className="add-to-do-form">
                  <input type="text" ref="todo" placeholder="Enter a to do item"/>
                  <button className="button expanded">Add to do item</button>
              </form>
          </div>
      )
  }
});

export default connect()(AddToDoForm);
