modulejs.define('taskForm',['jquery','react'], function($, React){
	
	var taskForm = React.createClass({
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
		  <form onSubmit={this._onSubmit}>
			  <input type="text" name="task[name]" defaultValue={this.props.name} />
	 		  <input type="hidden" name="task[id]" defaultValue={this.props.id} />
		  </form>
      );
	  }
	});
  
  return taskForm;
});