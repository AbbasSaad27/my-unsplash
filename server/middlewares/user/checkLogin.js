//dependencies
const jwt = require('jsonwebtoken');

const checkLogin = async function (req, res, next) {
   console.log(req.signedCookies);

   const cookies = Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

   if (cookies) {
      try {
         const token = cookies[process.env.COOKIE_NAME];
         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
         req.user = decoded;
         next();
      } catch (error) {
         next(new Error('Failed to authenticate cookie and token'));
      }
   } else {
      next(new Error('You are not signed in. Pleas sign in first'));
   }
};

module.exports = checkLogin;
