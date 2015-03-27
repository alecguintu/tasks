modulejs.define('taskShow', ['jquery', 'react', 'taskForm'], function($, React, TaskForm) {
	
  var taskShow = React.createClass({

    displayName: 'taskShow',

    _onClick: function() {
      React.render(
        React.createElement(TaskForm, null), $("#tasks-form")[0]
      );
    },

    render: function() {
      return (
        React.createElement("a", {href: "javascript:;", onClick: this._onClick}, "Create Task")
      )
    }

  });

  return taskShow;

});