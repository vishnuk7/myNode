const path = require("path");
const fs = require("fs");

const file = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    //fetch previous cart
    fs.readFile(file, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        (product) => product.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        console.log("product id!!!", id);
        updatedProduct = { id: id, qty: 1 };
        console.log(updatedProduct);
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice = cart.totalPrice + +productPrice;

      fs.writeFile(file, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
