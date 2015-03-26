modulejs.define('todoShow', ['react'], function(React) {
	
  var view = React.createClass({displayName: "view",
    render: function() {
      return (
        React.createElement("p", null, "react")
      )
    }

  });

  return view;

});