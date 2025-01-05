const express = require('express');
const products = require('./data/products.js')
const cors = require('cors');
const connect = require('./config/db.js');
const connectDb = require('./config/db.js');

// conneting to DB 


const app = express();

// dotenv config 
require('dotenv').config();

// cors for allow frontend to connect with server 
app.use(cors());

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find((product) => req.params.id === product._id); 
    console.log(req.params.id); 
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' }); 
    }
  });
  
PORT = 8000
connectDb().then(()=>{app.listen(process.env.PORT ||8000, () => {
  console.log("Server is started on port 8000");
})})
.catch((err)=>{console.log(err.message,'err connecting database')})