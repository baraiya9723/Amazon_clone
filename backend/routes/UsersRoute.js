const express = require("express");
const {registerUser ,authController , getUserProfile , updateUserProfile}  = require('../controllers/usersController');
const {protect} = require('../middlewares/authMiddleware')

const router = express.Router();

// user registration 
router.route("/").post(registerUser);

// post email and password 

router.route("/login").post(authController);

//get user profile Private Route

router.route("/profile").get(protect,getUserProfile)
router.route("/profile").put(protect, updateUserProfile);

module.exports = router;
