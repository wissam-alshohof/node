const store = {};

store.products = [];

store.setProduct = function (product) { store.products.push(product); }

module.exports = store;