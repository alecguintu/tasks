modulejs.define('taskAction',['appDispatcher','taskConstants','api'],function(AppDispatcher, taskConstants,Api){
  var todoAction = {
    getAllData: function(){
      api = new Api(taskConstants.LOAD, '/tasks');
      api.get();
    },
    create: function(params) {
      api = new Api(taskConstants.CREATE, '/tasks', params);
      api.post();
    }
  }
  return todoAction;
});