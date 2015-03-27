modulejs.define('tasksList', ['jquery', 'react', 'immutable', 'taskStore', 'taskConstants', 'tasksPerList'], function($, React, Immutable, TaskStore, TaskConstants, TasksPerList) {
	
  var tasksList = React.createClass({
    displayName: 'tasksList',

    getInitialState: function() {
      return {
        tasks: TaskStore.all()
      }
    },

    componentDidMount: function() {
      var _this = this;
      TaskStore.addThisListener(TaskConstants.CREATE, function() {
        _this.setState({tasks: TaskStore.all()});
      });
    },

    componentWillUnmount: function() {
      TaskStore.removeThisListener(TaskConstants.CREATE);
    },

    render: function() {
      return (
        <ul>
          {this.state.tasks.map(function(task) {
            return(<TasksPerList name={task.get('name')} id={task.get('id')} />)
          })}
        </ul>
      )
    }
  });

  return tasksList;

});