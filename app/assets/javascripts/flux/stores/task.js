modulejs.define('taskStore', ['underscore', 'jquery', 'eventEmitter', 'appDispatcher', 'taskConstants'], function(_, $, EventEmitter, AppDispatcher, TaskConstants) {
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

    addThisListener: function(eventName, callback) { this.on(eventName, callback) },
    removeThisListener: function(eventName, callback) { this.removeListener(eventName, callback) },

    emit: function(eventName) { this.emit(eventName) },
  }
  _.extend(TaskStore, EventEmitter.prototype);

  AppDispatcher.register(function(payload) {
    console.log("I'm listening to ->", payload);

    switch (payload.key) {
    case TaskConstants.CREATE:
      create(payload.values);
      TaskStore.emit(TaskConstants.CREATE);
      break;
    case TaskConstants.UPDATE:
      create(payload.values);
      TaskStore.emit(TaskConstants.CREATE);
      break;
      
    }
  });

  return TaskStore;
});
