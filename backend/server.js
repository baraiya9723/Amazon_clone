const express = require('express');
const products = require('./data/products.js')
const cors = require('cors');
const app = express();
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
  

app.listen(8000, () => {
  console.log("Server is started on port 8000");
});