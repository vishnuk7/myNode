const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

let products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const file = path.join(rootDir, "data", "products.json");
    //reading exitsing content before adding any new content
    fs.readFile(file, (err, fileContent) => {
      if (!err) {
        products = JSON.parse(fileContent);
      }
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
    const file = path.join(rootDir, "data", "products.json");
    fs.readFile(file, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
