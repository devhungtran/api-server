const express = require("express");
const { GetAllProduct } = require("../controller/ProductController");
const product = express.Router();



product.get('/product/get-all', GetAllProduct)



module.exports = product;