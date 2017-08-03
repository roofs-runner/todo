var React = require('react');

var AddToDoForm = React.createClass({
  onSubmit: function (e) {
      e.preventDefault();
      var todoItem = this.refs.todo.value;

      if (todoItem.length > 0) {
          this.refs.todo.value = '';
          this.props.onAddToItem(todoItem);
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

module.exports = AddToDoForm;