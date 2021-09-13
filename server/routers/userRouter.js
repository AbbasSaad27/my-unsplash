//dependencies
const express = require('express');
const multer = require('multer');

//internal imports
const { userSignUp, userSignIn, getUser } = require('../controllers/userController');
const checkLogin = require('../middlewares/user/checkLogin');

//init multer middlewares for text fields
const upload = multer();

const router = express.Router();

//user signup signin routes
router.post('/signup', upload.none(), userSignUp);
router.post('/signin', upload.none(), userSignIn);

//get loggedin user data
router.get('/', checkLogin, getUser);

module.exports = router;
