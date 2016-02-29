'use strict';

let React = require('react');

let CategoryCreate = React.createClass({
  render () {
    return (
      <div className="thirteen columns content-area">
        <form className="pad">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
});

module.exports = CategoryCreate;
