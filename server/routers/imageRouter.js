//dependencies
const express = require('express');
const multer = require('multer');

//internal imports
const { addImage, deleteImage } = require('../controllers/imageController');
const checkLogin = require('../middlewares/user/checkLogin');

//init router
const router = express.Router();

//add image
router.post('/', checkLogin, addImage);
router.delete('/', checkLogin, deleteImage);

module.exports = router;
