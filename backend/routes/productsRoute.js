const express = require("express");
const {getProducts ,getProduct} = require("../controllers/productsController");
const router = express.Router();


router.route("/products").get(getProducts);

router.route("/products/:id").get(getProduct);

module.exports = router;
