modulejs.define('tasksPerList', ['jquery', 'react', 'immutableRenderMixin', 'taskForm'], function($, React, ImmutableRenderMixin, TaskForm) {
	
  var tasksPerList = React.createClass({
    displayName: 'tasksPerList',
    mixins: [ImmutableRenderMixin],

    _onEdit: function(e) {
      e.preventDefault();

      React.render(
        <TaskForm id={this.props.id} name={this.props.name} />, $("#tasks-form")[0]
      );
    },
    _onDelete: function(e) {
      e.preventDefault();

      $.ajax({
        url: 'tasks/' + this.props.id,
        method: 'DELETE',
        success: function(data) {
          $('#tasks-list').trigger('data-updated', [data]);
        }
      });
    },

    render: function() {
      return(
        <li>
          <span onClick={this._onEdit}>{this.props.name}</span>&nbsp;
          <span onClick={this._onDelete}>[Delete]</span>
        </li>
      )
    }
  });

  return tasksPerList;

});
