modulejs.define('todoShow', ['jquery','react', 'taskForm', 'taskList'], function($,React, TaskForm, TaskList) {
	
  var getTask = function(){
    
  }
  
  var view = React.createClass({    
	  _showForm: function(e){
      React.render(<TaskForm />, document.getElementById('task-form'));
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
        }.bind(selfRef)
      });    
    },
    getInitialState: function()
    {
      return {items:[]}
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
    }
  });

  return view;

});