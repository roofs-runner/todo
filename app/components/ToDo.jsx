var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({
     render: function () {
         var {id, text, completed, createdAt, completedAt} = this.props;
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
             <div onClick={() => {
                 this.props.onToggle(id);
             }}>
                 <input type="checkbox" checked={completed}/>
                 <p>{text}</p>
                 <p>{renderDate()}</p>
             </div>
         )
     }
});

module.exports = ToDo;