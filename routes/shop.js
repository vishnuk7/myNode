const express = require("express");

const router = express.Router();

const shopProductController = require("../controller/shop");

router.get("/", shopProductController.getIndex);

router.get("/products", shopProductController.getProduct);

router.get("/cart", shopProductController.getCart);

router.get("/checkout", shopProductController.getCheckout);

module.exports = router;
