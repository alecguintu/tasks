modulejs.define('taskForm', ['jquery', 'react'], function($, React) {
	
  var taskForm = React.createClass({

    displayName: 'taskForm',

    _onSubmit: function(e) {
      e.preventDefault();

      var _url = '', _method = '';

      _id = $('form').find('[name="task[id]"]').val()

      if (_id) {
        _url = 'tasks/' + _id
        _method = 'PATCH'
      } else {
        _url = 'tasks'
        _method = 'POST'
      }

      $.ajax({
        url: _url,
        method: _method,
        data: $("form").serialize(),
        success: function(data) {
          $('#tasks-list').trigger('data-updated', [data]);
          React.unmountComponentAtNode($("#tasks-form")[0]);
        }
      });
    },

    componentDidMount: function() {
      $('form').find('[name="task[name]"]').focus();
    },

    render: function() {
      return (
        <form onSubmit={this._onSubmit}>
          <input type="hidden" name="task[id]" defaultValue={this.props.id} />
          <input type="text" name="task[name]" defaultValue={this.props.name} />
        </form>
      )
    }

  });

  return taskForm;

});