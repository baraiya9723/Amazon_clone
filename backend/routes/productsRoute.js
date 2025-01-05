const express = require("express");
const {getproduct , getproducts} = require("../controllers/productsController");
const router = express.Router();


router.route("/products").get(getproducts);

router.route("/products/:id").get(getproduct);

module.exports = router;
