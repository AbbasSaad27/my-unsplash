//internal imports
const Image = require('./../models/Image');
const User = require('./../models/User');

const addImage = async function (req, res, next) {
   try {
      const newImage = new Image({ ...req.body });
      const savedImage = await newImage.save();
      await User.updateOne({ _id: req.user.id }, { $push: { images: savedImage._id } });
      res.status(200).json({ status: 'success', message: 'Image added successfully' });
   } catch (error) {
      next(new Error('There was error while adding image'));
   }
};

const deleteImage = async function (req, res, next) {
   try {
      const deletedImage = await Image.findByIdAndRemove({ _id: req.body.id });
      await User.updateOne(
         { _id: req.user.id },
         {
            $pull: { images: deletedImage._id },
         }
      );
      res.status(200).json({ status: 'success', message: 'Image deleted successfully' });
   } catch (error) {
      next(new Error('There was error while deleteing the image'));
   }
};

module.exports = { addImage, deleteImage };
