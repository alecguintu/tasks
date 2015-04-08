modulejs.define('todoShow', ['jquery','react', 'taskForm', 'taskList', 'taskAction','taskStore','taskConstants'], function($,React, TaskForm, TaskList, TaskAction, TaskStore, TaskConstants) {
	
  var getTask = function(){
    
  }
  
  var view = React.createClass({    
	  _showForm: function(e){
      React.render(<TaskForm />, document.getElementById('task-form'));
	  },
    getInitialState: function(){      
      return {items:[]};
    },
    componentDidMount: function() {
      TaskStore.loadAllData();
      TaskStore.addThisListener(TaskConstants.LOAD,this._onChange);
    },
    componentWillUnmount: function() {
        TaskStore.removeThisListener(TaskConstants.LOAD);
    },    
    render: function() {      
      return (
		    <div>
          <p onClick={this._showForm}>Create Todo</p>
		      <div id="task-form"></div>
          <div id="task-list">
            <TaskList items={this.state.items} />
          </div>      
		    </div>
      )
    },
    
    _onChange: function(){
      this.setState({items:TaskStore.getAllData()});
    }
  });

  return view;

});