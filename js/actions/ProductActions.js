'use strict';

let AppDispatcher = require('../dispatcher/AppDispatcher');
let ProductEvents = require('../events/ProductEvents');

let ProductActions = {
  fetchCategoryList () {
    AppDispatcher.dispatch({
      actionType: ProductEvents.CATEGORY_LIST_FETCH
    });
  },

  fetchProductById (productId) {
    AppDispatcher.dispatch({
      actionType: ProductEvents.PRODUCT_FETCH,
      productId: productId
    });
  },

  createProductOnServer (product) {
    AppDispatcher.dispatch({
      actionType: ProductEvents.PRODUCT_NEW,
      product: product
    });
  },

  fetchProductList () {
    AppDispatcher.dispatch({
      actionType: ProductEvents.PRODUCT_LIST_FETCH
    });
  }
};

module.exports = ProductActions;
