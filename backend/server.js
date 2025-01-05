const express = require('express');
const products = require('./data/products.js')
const cors = require('cors');
const connectDb = require('./config/db.js');

const productRoutes = require("./routes/productsRoute");
const usersRoutes = require("./routes/UsersRoute");
const orderRoutes = require("./routes/orderRoute");

// conneting to DB 


const app = express();

// dotenv config 
require('dotenv').config();

// cors for allow frontend to connect with server 
app.use(cors());

app.use("/api", productRoutes);
// app.use("/api/users", usersRoutes);
// app.use("/api/orders", orderRoutes);
  
PORT = 8000
connectDb().then(()=>{app.listen(process.env.PORT ||8000, () => {
  console.log("Server is started on port 8000");
})})
.catch((err)=>{console.log(err.message,'err connecting database')})