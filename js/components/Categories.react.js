'use strict';

let React = require('react');
let RouterModule = require('react-router');
let ProductStore = require('../stores/ProductStore');
let ProductEvents = require('../events/ProductEvents');
let ProductActions = require('../actions/ProductActions');
let Link = RouterModule.Link;
let AppDispatcher = require('../dispatcher/AppDispatcher');

let Categories = React.createClass({
  getInitialState () {
    return {
      categoryCollection: []
    }
  },

  componentDidMount () {
    ProductStore.addChangeListener(this.onChange);
    ProductActions.fetchCategoryList();
  },

  componentWillUnmount () {
    ProductStore.removeChangeListener(this.onChange);
  },

  onChange () {
    if (this.isMounted()) {
      this.setState({
        categoryCollection: ProductStore.getCategoryList()
      });
    }
  },

  renderLi () {
    var liList = this.state.categoryCollection.map(function (item) {
      return (
        <li><a href="/">{item}</a></li>
      );
    });

    return liList;
  },

  render () {
    return (
      <div className="three columns">
        <h4 id="logo">My categories</h4>
        <nav>
          <ul>
            {this.renderLi()}
          </ul>
          <hr />
          <Link to="category-create">New category</Link>
        </nav>
      </div>
    );
  }
});

module.exports = Categories;
