modulejs.define('taskStore', ['underscore', 'jquery', 'eventEmitter'], function(_, $, EventEmitter) {

  var _tasks = Immutable.OrderedMap();

  var TaskStore = {
    all: function() {
      var taskData = $.parseJSON($("#tasks-data").html())

      _.each(taskData, function(task) {
        _tasks = _tasks.set(task.id, Immutable.fromJS(task))
      })

      return _tasks;
    },
  }
  _.extend(TaskStore, EventEmitter.prototype);

  return TaskStore
});
