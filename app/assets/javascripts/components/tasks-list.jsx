modulejs.define('tasksList', ['jquery', 'react'], function($, React) {
	
  var tasksList = React.createClass({

    displayName: 'tasksList',
    getInitialState: function() {
      return {
        tasks: $.parseJSON($("#tasks-data").html())
      }
    },
    render: function() {
      return (
        <ul>
          {
            $.map(this.state.tasks, function(task, i) {
              return <li>{task['name']}</li>
            })
          }
        </ul>
      )
    }

  });

  return tasksList;

});