modulejs.define('tasksPerList', ['jquery', 'react', 'immutableRenderMixin', 'taskForm', 'taskAction'], function($, React, ImmutableRenderMixin, TaskForm, TaskAction) {
	
  var tasksPerList = React.createClass({
    displayName: 'tasksPerList',
    mixins: [ImmutableRenderMixin],

    _onEdit: function(e) {
      e.preventDefault();

      React.render(
        React.createElement(TaskForm, {id: this.props.id, name: this.props.name}), $("#tasks-form")[0]
      );
    },
    _onDelete: function(e) {
      e.preventDefault();

      TaskAction.destroy(this.props.id);
    },

    render: function() {
      return(
        React.createElement("li", null, 
          React.createElement("span", {onClick: this._onEdit}, this.props.name), " ", 
          React.createElement("span", {onClick: this._onDelete}, "[Delete]")
        )
      )
    }
  });

  return tasksPerList;

});
