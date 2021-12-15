const mongoose = require('mongoose');
const { Schema } = mongoose;

const starSchema = new Schema({
    user_id:{  // id of user
     type: Number,
     required : true
    },
    ad_id:{ // AD id
    type: [Number],
    required : true
    }, 
    date:{
    type: Date,
    default: Date.now,
    required: true}
});
let report = mongoose.model("Star", starSchema);
star.createCollection();
module.exports = star;