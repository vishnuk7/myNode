const express = require("express");

const router = express.Router();

const shopProductController = require("../controller/shop");

router.get("/", shopProductController.getIndex);

router.get("/products", shopProductController.getProducts);

router.get("/products/:productId", shopProductController.getProduct); // orders matter

router.get("/cart", shopProductController.getCart);

router.post("/cart", shopProductController.postCart);

router.post("/cart-delete-item", shopProductController.postCartDeleteProduct);

router.get("/checkout", shopProductController.getCheckout);

router.get("/my-orders", shopProductController.getMyOrders);

module.exports = router;
