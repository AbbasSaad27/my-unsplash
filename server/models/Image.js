//dependencies
const mongoose = require('mongoose');

//Image Schema
const imageSchema = mongoose.Schema(
   {
      title: { type: String, required: true, trim: true },
      image_link: { type: String, required: true },
   },
   { timestamps: true }
);

//Image model
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
