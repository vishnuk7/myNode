const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

let products = [];

const file = path.join(rootDir, "data", "products.json");

const getProductFromFile = (cb) => {
  fs.readFile(file, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
  save() {
    getProductFromFile((products) => {
      products.push(this);
      //adding content into json file
      fs.writeFile(file, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
};
