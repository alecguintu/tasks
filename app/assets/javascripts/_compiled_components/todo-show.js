modulejs.define('todoShow', ['jquery', 'react', 'taskForm'], function($, React, TaskForm) {
	
  var todoShow = React.createClass({

    displayName: 'todoShow',

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

  return todoShow;

});