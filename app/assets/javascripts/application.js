// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require libs/modulejs-1.5.0
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

modulejs.define('react', React);
modulejs.define('jquery', function() { return jQuery; });
modulejs.define('underscore', function() { return _; });

$(function() {
  var React = modulejs.require('react');
  var TaskShow = modulejs.require('taskShow');
  var taskShow = React.createFactory(TaskShow);
  React.render(taskShow(), $('#tasks-index')[0]);

  var TasksList = modulejs.require('tasksList');
  var tasksList = React.createFactory(TasksList);
  React.render(tasksList({taskData: $.parseJSON($("#tasks-data").html())}), $('#tasks-list')[0]);
})
