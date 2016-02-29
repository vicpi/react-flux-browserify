'use strict';

let React = require('react');
let HttpRequest = require('../services/HttpRequest');
let ProductEvents = require('../events/ProductEvents');
let AppDispatcher = require('../dispatcher/AppDispatcher');
let Product = require('../models/Product.js');
let ProductStore = require('../stores/ProductStore');
let ProductActions = require('../actions/ProductActions');
let RouterModule = require('react-router');
let Link = RouterModule.Link;

let ProductList = React.createClass({
  getInitialState () {
    return {
      productCollection: []
    };
  },

  componentDidMount () {
    ProductStore.addChangeListener(this.onChange);
    ProductActions.fetchProductList();
  },

  componentWillUnmount () {
    console.log('ProductList ComponentWillUnmount');
  },

  componentWillReceiveProps () {
    console.log('ProductList ComponentWillReceiveProps');
  },

  renderProducts () {
    var uiProductCollection = [];
    for (let product of this.state.productCollection) {
      uiProductCollection.push(
        <tr key={product.id} data-key={product.id}>
          <td><Link to={'product-view/' + product.id}>{product.name}</Link></td>
          <td className="category"><a href="#">{product.category}</a></td>
          <td className="hidden-text date">{product.price}</td>
        </tr>
      );
    }

    return (
      <table className="notes">
        <tbody>
          <tr>
            <th className="note">Product <a href="#" className="sort_arrow" >&uarr;</a><a href="#" className="sort_arrow" >&darr;</a></th>
            <th>Category</th>
            <th className="date">Price <a href="#" className="sort_arrow" >&uarr;</a><a href="#" className="sort_arrow" >&darr;</a></th>
          </tr>
          {uiProductCollection}
        </tbody>
      </table>
    );
  },

  onChange () {
    if (this.isMounted()) {
      this.setState({
        productCollection: ProductStore.getProductList()
      });
    }
  },

  render () {
    return (
      <div className="thirteen columns content-area">
        {this.renderProducts()}
        <Link to="product-create" className="button">New product</Link>
      </div>
    );
  }
});

module.exports = ProductList;
