//depedencies
const bcrypt = require('bcrypt');
//internal imports
const Image = require('./../models/Image');
const User = require('./../models/User');

const addImage = async function (req, res, next) {
   try {
      const newImage = new Image({ ...req.body });
      const savedImage = await newImage.save();
      await User.updateOne({ _id: req.user.id }, { $push: { images: savedImage._id } });
      res.status(200).json({ status: 'success', message: 'Image added successfully', data: { image: savedImage } });
   } catch (error) {
      next(new Error(error));
   }
};

const deleteImage = async function (req, res, next) {
   try {
      const user = await User.findOne({ _id: req.user.id });
      if (user && user._id) {
         const isValidPassword = await bcrypt.compare(req.body.userPassword, user.password);
         if (isValidPassword) {
            const deletedImage = await Image.findByIdAndRemove({ _id: req.body.imageId });
            await User.updateOne(
               { _id: req.user.id },
               {
                  $pull: { images: deletedImage._id },
               }
            );
            res.status(200).json({ status: 'success', message: 'Image deleted successfully' });
         } else {
            next(new Error('Your entered password that does not match with the logged in user password'));
         }
      } else {
         next(new Error('User not found'));
      }
   } catch (error) {
      next(new Error(error));
   }
};

module.exports = { addImage, deleteImage };
