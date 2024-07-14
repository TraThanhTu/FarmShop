const express = require('express');
const router = express.Router();
const {
  addProduct,
  removeProduct,
  showAllProducts,
} = require('../controllers/productController');

router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);
router.get('/allproducts', showAllProducts);

module.exports = router;
