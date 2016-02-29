var React = require('react');
var RouterModule = require('react-router');
var Application = require('./components/Application.react');
var CategoryCreate = require('./components/CategoryCreate.react');
var ProductView = require('./components/ProductView.react');
var CreateProduct = require('./components/CreateProduct.react');
var ProductList = require('./components/ProductList.react');

var Route = RouterModule.Route;

var routes = (
  <Route  component={Application}>
    <Route path="product-create" component={CreateProduct} />
    <Route path="product-list" component={ProductList} />
    <Route path="category-create" component={CategoryCreate} />
    <Route path="product-view/:productId" component={ProductView} />
    <Route path="/" component={ProductList} />
  </Route>
);

module.exports = routes;
