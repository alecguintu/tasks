modulejs.define('taskForm',['jquery','react'], function($, React){
	
	var taskForm = React.createClass({displayName: "taskForm",
		_onSubmit: function(e){
      e.preventDefault();
			
      $.ajax({
        url: '/tasks',
        method: 'POST',
        data: $(e.target).serialize(),
        success: function(data){
          console.log(data);
        }
      });
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