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
        React.createElement("ul", null, 
          
            $.map(this.state.tasks, function(task, i) {
              return React.createElement("li", null, task['name'])
            })
          
        )
      )
    }

  });

  return tasksList;

});