modulejs.define('taskAction', ['api', 'taskConstants'], function(Api, TaskConstants) {
  return {
    create: function(params) {
      api = new Api(TaskConstants.CREATE, '/tasks', params)
      api.post();
    },
    update: function(id, params) {
      api = new Api(TaskConstants.UPDATE, '/tasks/' + id, params);
      api.patch();
    },
    destroy: function(id) {
      api = new Api(TaskConstants.DESTROY, '/tasks/' + id);
      api.destroy();
    }
  }
});