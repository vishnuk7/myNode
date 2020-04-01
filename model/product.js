const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
    console.log(products);
  }

  static fetchAll() {
    return products;
  }
};
