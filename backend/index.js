const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoute = require('./routes/productRoute');
dotenv.config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

//Database Conntection MOngoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('App connected to db');
    console.log(PORT);
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
//API creation
app.get('/', (req, res) => {
  res.send('App is running');
});
app.use('/api', productRoute);

//Img Storage Engine

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint for images

app.use('/images', express.static('upload/images'));

app.post('/api/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});
