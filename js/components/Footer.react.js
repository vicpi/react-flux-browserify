'use strict';

let React = require('react');

let Footer = React.createClass({
  render () {
    return (
    <div>
      <hr className="footer"/>
      <div className="footer">
        <div>Products: <strong>React</strong> application</div>
      </div>
    </div>
    );
  }
});

module.exports = Footer;