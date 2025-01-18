const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const User = require("../models/UserModel")


const protect = asyncHandler(async(req , res , next)=>{
    console.log(req.headers.authorization)
  let token ;
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
     try{
       token = req.headers.authorization.split(" ")[1];
       const decode = jwt.verify(token,process.env.JWT_TOKEN_SKEY);
       req.user = await User.findById(decode.id)
       next()
     }catch(error){
      console.log(error);
      res.status(401);
      throw new Error("Not authorized , token failed")
     }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, not token");
  }
})

module.exports = {protect}