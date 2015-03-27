modulejs.define('tasksList', ['jquery', 'react', 'immutable', 'taskStore', 'tasksPerList'], function($, React, Immutable, TaskStore, TasksPerList) {
	
  var tasksList = React.createClass({
    displayName: 'tasksList',

    getInitialState: function() {
      return {
        tasks: TaskStore.all()
      }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
      return Immutable.fromJS(nextState.tasks) !== Immutable.fromJS(this.state.tasks);
    },
    componentDidMount: function() {
      $('#tasks-list').on('data-updated', function(e, data) {
        _this.setState({tasks: data})
      });
    },
    render: function() {
      return (
        React.createElement("ul", null, 
          this.state.tasks.map(function(task) {
            return(React.createElement(TasksPerList, {name: task.get('name'), id: task.get('id')}))
          })
        )
      )
    }
  });

  return tasksList;

});