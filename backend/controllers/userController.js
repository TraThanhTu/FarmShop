const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
//Sign Up
const signUp = async (req, res) => {
  let check = await userModel.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: 'existing user found with same email address',
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new userModel({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };
  console.log(data);
  const token = jwt.sign(data, 'secret_ecom');
  res.json({ success: true, token });
};

const loginUser = async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, 'secret_ecom');
      res.json({ success: true, token });
      console.log('==============Login success');
    } else {
      res.json({ success: false, errors: 'Wrong password ' });
    }
  } else {
    res.json({ success: false, errors: 'Wrong email ' });
  }
};
module.exports = { signUp, loginUser };
