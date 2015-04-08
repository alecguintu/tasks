modulejs.define('todoShow', ['jquery','react', 'taskForm', 'taskList'], function($,React, TaskForm, TaskList) {
	
  var getTask = function(){
    
  }
  
  var view = React.createClass({displayName: "view",    
	  _showForm: function(e){
      React.render(React.createElement(TaskForm, null), document.getElementById('task-form'));
	  },
    componentDidMount: function(){
      var selfRef = this;
      $.ajax({
        url:'/tasks',
        method:'GET',        
        success: function(data)
        {          
          if(selfRef.isMounted()){
            selfRef.setState({items:data});
          }            
        }
      });    
    },
    getInitialState: function()
    {
      return {items:[]}
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
    }
  });

  return view;

});