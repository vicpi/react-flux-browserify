'use strict';

let React = require('react');
var RouterModule = require('react-router');
var Link = RouterModule.Link;

var Title = React.createClass({
  render () {
    return (
      <div className="sixteen columns">
        <h1 className="bold-header"><Link className="header" to="product-list">products</Link> </h1>
      </div>
    );
  }
});

module.exports = Title;