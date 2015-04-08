modulejs.define('taskList',['jquery','react'], function($,React){
  var taskList = React.createClass({displayName: "taskList",
    render: function(){      
      return(
        React.createElement("ul", null, 
                      
            $.map(this.props.items, function(task, i){
              return(
                React.createElement("li", null, 
                  React.createElement("span", null, task.name)
                )
              )
            })
          
        )
      )
    }
  });  
  
  return taskList;
});