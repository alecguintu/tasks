modulejs.define('tasksList', ['jquery', 'react'], function($, React) {
	
  var tasksList = React.createClass({

    displayName: 'tasksList',
    getInitialState: function() {
      return {
        tasks: this.props.taskData
      }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
      console.log('should i update?')
      return nextState.tasks.length !== this.state.tasks.length;
    },
    componentDidMount: function() {
      var _this = this;
      $('#tasks-list').on('data-updated', function(e, data) {
        _this.setState({tasks: data})
      });
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