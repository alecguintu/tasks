modulejs.define('todoShow', ['jquery','react', 'taskForm', 'taskList', 'taskAction','taskStore','taskConstants'], function($,React, TaskForm, TaskList, TaskAction, TaskStore, TaskConstants) {
	
  var getTask = function(){
    
  }
  
  var view = React.createClass({displayName: "view",    
	  _showForm: function(e){
      React.render(React.createElement(TaskForm, null), document.getElementById('task-form'));
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
		    React.createElement("div", null, 
          React.createElement("p", {onClick: this._showForm}, "Create Todo"), 
		      React.createElement("div", {id: "task-form"}), 
          React.createElement("div", {id: "task-list"}, 
            React.createElement(TaskList, {items: this.state.items})
          )
		    )
      )
    },
    
    _onChange: function(){
      this.setState({items:TaskStore.getAllData()});
    }
  });

  return view;

});