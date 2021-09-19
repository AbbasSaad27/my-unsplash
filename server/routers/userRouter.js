//dependencies
const express = require('express');
const multer = require('multer');

//internal imports
const { userSignUp, userSignIn, getUser, userSignOut } = require('../controllers/userController');
const checkLogin = require('../middlewares/user/checkLogin');

//init multer middlewares for text fields
const upload = multer();

const router = express.Router();

//user signup signin signout routes
router.post('/signup', upload.none(), userSignUp);
router.get('/cookie', (req, res, next) => {
   console.log('GG');
});
router.post('/signin', upload.none(), userSignIn);
router.delete('/signout', checkLogin, userSignOut);

//get loggedin user data
router.get('/', checkLogin, getUser);

module.exports = router;
