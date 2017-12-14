var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router")


//Load foundation
require("style!css!foundation-sites/dist/foundation.min.css")
$(document).foundation();

// app css
require("style!css!sass!app/styles/app.scss")

ReactDOM.render(
  <p>boiler plate project</p>
  document.getElementById('app')
);
