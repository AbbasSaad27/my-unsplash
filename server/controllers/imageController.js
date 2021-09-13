//internal imports
const Image = require('./../models/Image');

const addImage = async function (req, res, next) {
   //TODO: impliment add image functionality
   try {
      const newImage = new Image({ ...req.body });
      const savedImage = await newImage.save();
      res.status(200).json({ status: 'success', message: 'Image added successfully' });
   } catch (error) {
      next(error);
   }
};

module.exports = { addImage };
