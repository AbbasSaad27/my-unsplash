//dependencies
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//internal imports
const User = require('./../models/User');

const userSignUp = async function (req, res, next) {
   const hashedPassword = await bcrypt.hash(req.body.password, 10);
   try {
      const newUser = new User({
         ...req.body,
         password: hashedPassword,
      });
      await newUser.save();
      res.status(200).json({ status: 'success', message: 'User signed up successfully' });
   } catch (error) {
      next(error);
   }
};

const userSignIn = async function (req, res, next) {
   try {
      const user = await User.findOne({ email: req.body.email });
      //console.log(user);

      if (user && user._id) {
         const isValidPassword = await bcrypt.compare(req.body.password, user.password);
         if (isValidPassword) {
            const userObjectJwt = {
               id: user._id,
               email: user.email,
               mobile: user.mobile,
            };
            const token = jwt.sign(userObjectJwt, process.env.JWT_SECRET_KEY, {
               expiresIn: process.env.JWT_EXPIRY,
            });
            res.cookie(process.env.COOKIE_NAME, token, {
               maxAge: process.env.JWT_EXPIRY,
               httpOnly: false,
               sameSite: 'none',
               signed: true,
            });
            res.status(200).json({ status: 'success', message: 'User signed in successfully' });
         } else {
            next(new Error('Authentication Error 1'));
         }
      } else {
         next(new Error('Authentication Error 2'));
      }
   } catch (error) {
      next(error);
   }
};

const getUser = async function (req, res, next) {
   try {
      const user = await User.findById({ _id: req.user.id }).populate('images').select({ password: 0 });
      res.status(200).json({ status: 'success', message: 'successfully fetched user data', data: user });
   } catch (error) {
      next(new Error('Failed to get user'));
   }
};

module.exports = { userSignUp, userSignIn, getUser };
