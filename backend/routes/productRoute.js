const express = require('express');
const router = express.Router();
const {
  addProduct,
  removeProduct,
  showAllProducts,
  newCollectionProduct,
  popularFruit,
  addToCart,
  removeFromCart,
  getCart,
} = require('../controllers/productController');

router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);
router.post('/addtocart', addToCart);
router.post('/removefromcart', removeFromCart);
router.post('/getcart', getCart);
router.get('/allproducts', showAllProducts);
router.get('/newcollections', newCollectionProduct);
router.get('/popularfruit', popularFruit);

module.exports = router;
