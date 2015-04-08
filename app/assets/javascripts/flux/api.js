modulejs.define('api', ['jquery', 'appDispatcher'], function($, AppDispatcher) {
  var TIMEOUT = 10000;
  var GET = 'get', POST = 'post', PATCH = 'patch', DESTROY = 'delete';

  function dispatch(key, values) {
    AppDispatcher.dispatch({ key: key, values: values });
  }

  function success(key, data) {
    return dispatch(key, data);
  }

  function error(key, jqXHR, textStatus, errorThrown) { }

  function complete(key, jqXHR, textStatus) { }

  function ajaxCall(requestType, key, url, params) {
    return(
      $.ajax({
        type: requestType,
        url: url,
        data: params,
        dataType: 'JSON',
        timeout: TIMEOUT,
        success: function(data) {
          console.log(key, data);
          success(key, data)
        }, error: function(jqXHR, textStatus, errorThrown) {
          error(key, jqXHR, textStatus, errorThrown)
        }, complete: function(jqXHR, textStatus) {
          complete(key, jqXHR, textStatus)
        }
      })
    )
  }

  var Api = function(key, url, params) {
    this.get = function() { ajaxCall(GET, key, url, params); }
    this.post = function() { ajaxCall(POST, key, url, params); }
    this.patch = function() { ajaxCall(PATCH, key, url, params); }
    this.destroy = function() { ajaxCall(DESTROY, key, url) }
  }

  return Api;
});