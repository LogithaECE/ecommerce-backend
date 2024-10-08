const ProductController = require("../controllers/productController");
const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/", ProductController.getProducts);
router.post("/", auth, ProductController.addProducts);
router.get("/:id", ProductController.getProductById);

module.exports = router;
