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
        <form onSubmit={this._onSubmit}>
          <input type="text" name="task[name]" />
        </form>
      )
    }

  });

  return taskForm;

});