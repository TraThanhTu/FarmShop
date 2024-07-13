const productModel = require('../models/productModel');

const addProduct = async (req, res) => {
  const product = new productModel({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log('Saved');
  res.json({
    success: true,
    name: req.body.name,
  });
};

module.exports = { addProduct };
