modulejs.define('taskForm', ['jquery', 'react'], function($, React) {
	
  var taskForm = React.createClass({

    displayName: 'taskForm',

    _onSubmit: function(e) {
      e.preventDefault();
      $.ajax({
        url:"tasks",
        method:"POST",
        data:$("form").serialize(),
        success: function(data) {
          $('#tasks-list').trigger('data-updated', [data]);
          React.unmountComponentAtNode($("#tasks-form")[0]);
        }
      });
    },

    render: function() {
      return (
        React.createElement("form", {onSubmit: this._onSubmit}, 
          React.createElement("input", {type: "text", name: "task[name]"})
        )
      )
    }

  });

  return taskForm;

});