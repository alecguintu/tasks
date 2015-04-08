modulejs.define('taskAction',['appDispatcher','taskConstants','api'],function(AppDispatcher, taskConstants,Api){
  var todoAction = {
    getAllData: function(){
      console.log(this)
      AppDispatcher.dispatch({
        key: taskConstants.GETALL
      });
    },
    create: function(params) {
      api = new Api(taskConstants.CREATE, '/tasks', params);
      api.post();
    }
  }
  return todoAction;
});