var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var ToDo = React.createClass({
     render: function () {
         var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
         var todoClassName = completed ? 'todo todo-completed' : 'todo';
         var renderDate = () => {
           var message = 'Created ';
           var timestapm = createdAt;

           if (completed) {
               message = 'Completed ';
               timestapm = completedAt;
           }

           return message + moment.unix(timestapm).format('MMM Do YYYY @ HH:mm');
         };

         return (
             <div className={todoClassName} onClick={() => {
                 dispatch(actions.toggleToDo(id));
             }}>
                 <div>
                     <input type="checkbox" checked={completed}/>
                 </div>
                 <div>
                     <p>{text}</p>
                     <p className="todo__subtext">{renderDate()}</p>
                 </div>
             </div>
         )
     }
});

export default connect()(ToDo);
