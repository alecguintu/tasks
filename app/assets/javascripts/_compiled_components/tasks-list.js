modulejs.define('tasksList', ['jquery', 'react', 'taskForm'], function($, React, TaskForm) {
	
  var tasksList = React.createClass({

    displayName: 'tasksList',
    getInitialState: function() {
      return {
        tasks: this.props.taskData
      }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
      console.log('should i update?')
      console.log(nextState.tasks !== this.state.tasks)
      return nextState.tasks.length !== this.state.tasks.length;
    },
    componentDidMount: function() {
      var _this = this;
      $('#tasks-list').on('data-updated', function(e, data) {
        _this.setState({tasks: data})
      });
    },
    _onClick: function(e) {
      e.preventDefault();
      var el = e.currentTarget;
      React.render(
        React.createElement(TaskForm, {id: $(el).data("id"), name: $(el).html()}), $("#tasks-form")[0]
      );
    },
    _onDelete: function(e) {
      e.preventDefault();

      var el = e.currentTarget;
      console.log($(el).data("id"));
      $.ajax({
        url: 'tasks/' + $(el).data("id"),
        method: 'DELETE',
        success: function(data) {
          $('#tasks-list').trigger('data-updated', [data]);
        }
      });
    },
    render: function() {
      var _this = this;
      return (
        React.createElement("ul", null, 
          
            $.map(this.state.tasks, function(task, i) {
              return(
                React.createElement("li", null, 
                  React.createElement("span", {onClick: _this._onClick, "data-id": task['id']}, task['name']), " ", 
                  React.createElement("span", {onClick: _this._onDelete, "data-id": task['id']}, "[Delete]")
                )
              )
            })
          
        )
      )
    }

  });

  return tasksList;

});