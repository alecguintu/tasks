modulejs.define('todoShow', ['jquery', 'react', 'taskForm'], function($, React, TaskForm) {
	
  var todoShow = React.createClass({

    displayName: 'todoShow',

    _onClick: function() {
      React.render(
        <TaskForm />, $("#tasks-form")[0]
      );
    },

    render: function() {
      return (
        <a href="javascript:;" onClick={this._onClick}>Create Task</a>
      )
    }

  });

  return todoShow;

});