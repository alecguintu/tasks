modulejs.define('api', ['jquery', 'appDispatcher'], function($, AppDispatcher) {
  var TIMEOUT = 10000;
  var GET = 'get';
  var POST = 'post'
  
  function dispatch(key, values) {
    AppDispatcher.dispatch({ key: key, values: values });
  }

  function success(key, data) {
    return dispatch(key, data);
  }

  function error(key, jqXHR, textStatus, errorThrown) { }

  function complete(key, jqXHR, textStatus) { }

  function ajaxCall(requestType, url, params, key) {
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

  var Api = function(url, params, key) {
    this.get = function() { ajaxCall(GET, url, params, key); }
    this.post = function() { ajaxCall(POST, url, params, key); }
  }
  
  return Api;
});
