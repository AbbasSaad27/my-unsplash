const notFoundHandler = function (req, res, next) {
   res.status(404).json({ status: 'fail', message: 'Your requested url was not found' });
};

const defaultErrorHandler = function (error, req, res, next) {
   if (res.headersSent) {
      next('Header was already sent');
   } else {
      if (error.message) {
         res.status(500).json({ status: 'fail', message: error.message });
      } else {
         res.status(500).json({ status: 'fail', message: 'There was something error' });
      }
   }
};

module.exports = { notFoundHandler, defaultErrorHandler };
