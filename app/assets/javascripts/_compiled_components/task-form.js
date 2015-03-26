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
          console.log(data);
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