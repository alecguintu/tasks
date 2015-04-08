modulejs.define('taskForm',['jquery','react', 'taskAction'], function($, React, TaskAction){
	
	var taskForm = React.createClass({
		_onSubmit: function(e){      
      e.preventDefault();
      console.log($(e.target).serialize());
			TaskAction.create($(e.target).serialize());
		},
	  render: function(){ 
      return(
		  <form onSubmit={this._onSubmit}>
			  <input type="text" name="task[name]" defaultValue={this.props.name} />
	 		  <input type="hidden" name="task[id]" defaultValue={this.props.id} />
		  </form>
      );
	  }
	});
  
  return taskForm;
});