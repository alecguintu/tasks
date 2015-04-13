modulejs.define('taskForm',['jquery','react', 'taskAction'], function($, React, TaskAction){
	
	var taskForm = React.createClass({displayName: "taskForm",
		_onSubmit: function(e){      
      e.preventDefault();
			TaskAction.create($(e.target).serialize());
      this.props.hideForm();
		},
	  render: function(){ 
      return(
		  React.createElement("form", {onSubmit: this._onSubmit}, 
			  React.createElement("input", {type: "text", name: "task[name]", defaultValue: this.props.name}), 
	 		  React.createElement("input", {type: "hidden", name: "task[id]", defaultValue: this.props.id})
		  )
      );
	  }
	});
  
  return taskForm;
});