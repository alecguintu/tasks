modulejs.define('taskStore', ['underscore', 'jquery', 'eventEmitter', 'appDispatcher', 'taskConstants'], function(_, $, EventEmitter, AppDispatcher, TaskConstants) {
  // Handler for the store model
  var _tasks = Immutable.OrderedMap();
  
  // Private methods
  function _create(params) {
    _tasks = _tasks.set(params.id, Immutable.fromJS(params))
  }

  function _update(params) {
    // _tasks = _tasks.update(params.id, Immutable.fromJS(params))
    _tasks = _tasks.set(params.id, Immutable.fromJS(params))
  }

  function _destroy(params) {
    _tasks = _tasks.delete(params.id)
  }

  // Public methods
  var TaskStore = {
    // Accessor for `_tasks` store model
    all: function() {
      // This shouldn't be here as it reloads from static linked data on HTML whenever the data gets emptied out
      if (_tasks.size == 0) {
        _.each($.parseJSON($("#tasks-data").html()), function(task) { _create(task) })
      }

      return _tasks;
    },

    addThisListener: function(eventName, callback) { this.on(eventName, callback) },
    removeThisListener: function(eventName, callback) { this.removeListener(eventName, callback) },

    emitThis: function(eventName) { this.emit(eventName) },
  }
  _.extend(TaskStore, EventEmitter.prototype);

  AppDispatcher.register(function(payload) {
    console.log("I'm listening to ->", payload);

    switch (payload.key) {
    case TaskConstants.CREATE:
      _create(payload.values);
      TaskStore.emitThis(TaskConstants.CREATE);
      break;
    case TaskConstants.UPDATE:
      _update(payload.values);
      TaskStore.emitThis(TaskConstants.CREATE);
      break;
    case TaskConstants.DESTROY:
      _destroy(payload.values);
      TaskStore.emit(TaskConstants.CREATE)
    }
  });

  return TaskStore;
});
