const express = require("express");
const router = express.Router();

const adminProductController = require("../controller/admin");

router.get("/add-product", adminProductController.getAddProduct);

router.post("/add-product", adminProductController.postAddProduct);

router.get("/edit-product/:productId", adminProductController.getEditProduct);

router.post("/edit-product", adminProductController.postEditProduct);

router.post("/delete-product", adminProductController.postDeleteProduct);

router.get("/products", adminProductController.getProducts);

module.exports = router;
