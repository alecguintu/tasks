modulejs.define('taskStore', ['underscore', 'jquery', 'eventEmitter'], function(_, $, EventEmitter) {

  var _tasks = Immutable.OrderedMap();
  
  // Private methods
  function create(params) {
    _tasks = _tasks.set(params.id, Immutable.fromJS(params))
  }

  // Public methods

  var TaskStore = {
    all: function() {
      // If initially empty, check inside the html given by rails' controller
      if (_tasks.size == 0) {
        _.each($.parseJSON($("#tasks-data").html()), function(task) { create(task) })
      }

      return _tasks;
    },
  }
  _.extend(TaskStore, EventEmitter.prototype);

  return TaskStore
});
