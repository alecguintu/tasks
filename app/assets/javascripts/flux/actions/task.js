modulejs.define('taskAction', ['api', 'taskConstants'], function(Api, TaskConstants) {
  return {
    create: function(params) {
      api = new Api('/tasks', params, TaskConstants.CREATE)
      api.post();
    }
  }
});