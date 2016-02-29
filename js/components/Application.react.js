'use strict';

let React = require('react');
let Header = require('../components/Header.react');
let Categories = require('../components/Categories.react');
let ProductList = require('../components/ProductList.react');
let CreateProduct = require('../components/CreateProduct.react');
let Footer = require('../components/Footer.react');
let Title = require('../components/Title.react');

let Application = React.createClass({
  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  /**
   * Event handler for 'change' events coming from the ProductStore
   */
  _onChange: function() {
    this.setState({});
  },

  /**
   * @return {object}
   */
  render () {
    return (
      <div>
        <Header />
        <Title />
        <Categories />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = Application;
