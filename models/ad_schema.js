const mongoose = require("mongoose");
//mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true });
const { Schema } = mongoose;

const adSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
  is_premium: {
    type: Boolean, // to check if user paid for more views, main page etc.
    default: false,
  },
  views: {
    type: Number,
    default: 0,
  },
});
let ad = mongoose.model("Ad", adSchema);
ad.createCollection();
module.exports = ad;