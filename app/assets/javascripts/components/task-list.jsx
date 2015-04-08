modulejs.define('taskList',['jquery','react'], function($,React){
  var taskList = React.createClass({
    render: function(){      
      return(
        <ul>
          {            
            $.map(this.props.items, function(task, i){
              return(
                <li>
                  <span>{task.name}</span>
                </li>
              )
            })
          }
        </ul>
      )
    }
  });  
  
  return taskList;
});