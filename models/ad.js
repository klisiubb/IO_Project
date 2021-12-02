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
    photo_1:{ 
    type: String,
    required : true
    },
    photo_2:{
    type: String
    },
    photo_3:{
    type: String
    },
    photo_4:{
    type: String
    },
    photo_5:{
    type: String
    },
    phone:   {
    type:Number,
    required: true},
    date:{
    type: Date,
    default: Date.now,
    required: true}
});
let ad = mongoose.model("Ad", adSchema);
ad.createCollection();
module.exports = ad;