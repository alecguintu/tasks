modulejs.define('tasksList', ['jquery', 'react', 'immutable', 'tasksPerList'], function($, React, Immutable, TasksPerList) {
	
  var tasksList = React.createClass({
    displayName: 'tasksList',

    getInitialState: function() {
      return {
        tasks: this.props.taskData
      }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
      return Immutable.fromJS(nextState.tasks) !== Immutable.fromJS(this.state.tasks);
    },
    componentDidMount: function() {
      var _this = this;
      $('#tasks-list').on('data-updated', function(e, data) {
        _this.setState({tasks: data})
      });
    },
    render: function() {
      var _this = this;
      return (
        <ul>
          {
            $.map(this.state.tasks, function(task, i) {
              return(<TasksPerList name={task['name']} id={task['id']} />)
            })
          }
        </ul>
      )
    }

  });

  return tasksList;

});