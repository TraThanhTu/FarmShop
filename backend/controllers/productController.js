const productModel = require('../models/productModel');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
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
  if (products) {
    console.log('=============== All Products Fetched');
    res.send(products);
  } else {
    res.send('An Error occur');
  }
};

const newCollectionProduct = async (req, res) => {
  let products = await productModel.find({});

  if (products) {
    let newCollection = products.slice(1).slice(-8);
    console.log('newcollection Fetched');
    res.send(newCollection);
  } else {
    res.send('An Error occur');
  }
};

const popularFruit = async (req, res) => {
  let products = await productModel.find({ category: 'fruit' });
  let popular_fruit = products.slice(0, 4);
  console.log('Popular in fruit fetched');
  res.send(popular_fruit);
};

const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({ errors: 'Please authenticate using valid token' });
  } else {
    try {
      const data = jwt.verify(token, 'secret_ecom');
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(404)
        .send({ errors: 'Please authenticate using a valid token' });
    }
  }
};
const addToCart = async (req, res) => {
  await fetchUser(req, res, async () => {
    console.log('==========add', req.body.itemId);

    let userData = await userModel.findOne({ _id: req.user.id });

    userData.cartData[req.body.itemId] += 1;
    await userModel.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send('Added');
  });
};

const removeFromCart = async (req, res) => {
  await fetchUser(req, res, async () => {
    console.log('==========remove', req.body.itemId);
    let userData = await userModel.findOne({ _id: req.user.id });
    console.log('===================userData', userData);
    if (userData.cartData[req.body.itemId] > 0) {
      userData.cartData[req.body.itemId] -= 1;
      await userModel.findOneAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
      );
      res.send('Removed');
    }
  });
};

const getCart = async (req, res) => {
  await fetchUser(req, res, async () => {
    console.log('==============getCart');
    let userData = await userModel.findOne({ _id: req.user.id });
    res.json(userData.cartData);
  });
};

module.exports = {
  addProduct,
  removeProduct,
  showAllProducts,
  newCollectionProduct,
  popularFruit,
  addToCart,
  removeFromCart,
  getCart,
};
