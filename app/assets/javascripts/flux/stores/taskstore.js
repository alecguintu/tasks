modulejs.define('taskStore',['underscore','jquery','eventEmitter','appDispatcher','taskConstants','api'],function(_, $, EventEmiiter, AppDispatcher, TaskConstants, Api){
  var _task = [];//Immutable.OrderedMap();
  
  var _getAll = function()
  {     
    $.ajax({
      url:'/tasks',
      method:'GET',
      success: function(data){
        _task =  data;//_task.set(data);
        TaskStore.emitThis('change');        
      }
    });
  };
  
  var TaskStore = {
    loadAllData: function(){
      api = new Api(TaskConstants.LOAD, '/tasks')
      api.get();       
    },
    getAllData: function(){
      return _task;
    },
    addThisListener: function(eventName, callback) { this.on(eventName, callback) },
    removeThisListener: function(eventName, callback) { this.removeListener(eventName, callback) },

    emitThis: function(eventName) { this.emit(eventName) }
  }
  
  _.extend(TaskStore, EventEmitter.prototype);
  
  AppDispatcher.register(function(payload){
    switch(payload.key){
    case TaskConstants.LOAD:
      //console.log(payload);
      _task = payload.values;
      TaskStore.emitThis(TaskConstants.LOAD);
      break;
    case TaskConstants.CREATE:
      //_create(payload.values);
      _task = payload.values;
      TaskStore.emitThis(TaskConstants.LOAD);
      break;
    }
  })
  
  return TaskStore;
})