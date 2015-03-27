modulejs.define('taskForm', ['jquery', 'react', 'taskAction'], function($, React, TaskAction) {
	
  var taskForm = React.createClass({

    displayName: 'taskForm',

    _onSubmit: function(e) {
      e.preventDefault();

      if (this.props.id) {
        TaskAction.update(this.props.id, $('form').serialize());
      } else {
        TaskAction.create($('form').serialize());
      }

      React.unmountComponentAtNode($("#tasks-form")[0]);
    },

    componentDidMount: function() {
      $('form').find('[name="task[name]"]').focus();
    },

    render: function() {
      return (
        React.createElement("form", {onSubmit: this._onSubmit}, 
          React.createElement("input", {type: "text", name: "task[name]", defaultValue: this.props.name})
        )
      )
    }

  });

  return taskForm;

});