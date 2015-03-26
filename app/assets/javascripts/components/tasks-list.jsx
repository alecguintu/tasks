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