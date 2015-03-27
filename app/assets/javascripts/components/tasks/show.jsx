modulejs.define('taskShow', ['jquery', 'react', 'taskForm'], function($, React, TaskForm) {
	
  var taskShow = React.createClass({

    displayName: 'taskShow',

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

  return taskShow;

});