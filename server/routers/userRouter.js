//dependencies
const express = require('express');
const multer = require('multer');

//internal imports
const { userSignUp } = require('../controllers/userController');

//init multer middlewares for text fields
const upload = multer();

const router = express.Router();

//user signup route
router.post('/signup', upload.none(), userSignUp);

module.exports = router;