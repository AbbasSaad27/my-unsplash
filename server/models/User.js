//dependencies
const mongoose = require('mongoose');

//User Schema
const userSchema = mongoose.Schema(
   {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, unique: true, lowercase: true },
      mobile: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      images: [
         {
            type: mongoose.Types.ObjectId,
            unique: true,
            ref: 'Image',
         },
      ],
   },
   { timestamps: true }
);

//User model
const User = mongoose.model('User', userSchema);

module.exports = User;
