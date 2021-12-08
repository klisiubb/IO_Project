const mongoose = require('mongoose');
//mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true });   
const { Schema } = mongoose;

const adSchema = new Schema({
    owner_id:{ 
     type: Number,
     required : true
    },
    title:{  
    type: String,
    required : true
    },
    category_id:{
    type: Number,
    required : true
    }, 
    description: {
    type: String,
    required : true
    },
  Photo:{
    type:[String],
    required: true
  },
    phone:   {
    type:Number,
    required: true},
    date:{
    type: Date,
    default: Date.now,
    required: true},
    is_premium:{
        type: Boolean, // to check if user paid for more views, main page etc.
        default: false
    },
    views:{
        type:Number,
        default:0
    }
});
let ad = mongoose.model("Ad", adSchema);
ad.createCollection();
module.exports = ad;