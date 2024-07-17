const productModel = require('../models/productModel');

const addProduct = async (req, res) => {
  let products = await productModel.find({});
  console.log('=================================', products);
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    console.log('last_array ================', last_product_array);
    let last_product = last_product_array[0];
    console.log('last_product==========', last_product);
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new productModel({
    id: id,
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

const removeProduct = async (req, res) => {
  await productModel.findOneAndDelete({ id: req.body.id });
  console.log('Removed');
  res.json({
    success: true,
    name: req.body.name,
  });
};

const showAllProducts = async (req, res) => {
  let products = await productModel.find({});
  console.log('=============== All Products Fetched');
  res.send(products);
};

module.exports = { addProduct, removeProduct, showAllProducts };
