//dependencies
const express = require('express');
const multer = require('multer');

//internal imports
const { addImage } = require('../controllers/imageController');
const checkLogin = require('../middlewares/user/checkLogin');

//init multer middlewares for text fields
const upload = multer();

//init router
const router = express.Router();

//add image
router.post('/', checkLogin, upload.none(), addImage);

module.exports = router;
