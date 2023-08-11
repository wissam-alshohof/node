const store = require('../utils/store');
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        store.setProduct(this);
    }

    static getAll() {
        return store.products;
    }
}