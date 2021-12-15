const mongoose = require('mongoose');
const { Schema } = mongoose;

const supportSchema = new Schema({
    user_id:{  
     type: Number,
     required : true
    },
    topic:{
    type: String,
    required:true,
    default: "POMOCYYYYYYYYYYYYYYYYY"
    },
    user_messages: { 
        type: [String],
        required : true
        },
    support_messages: { //responce of support
        type: [String],
        required : true
        },
    message_dates:{
    type: [Date],
    default: Date.now,
    required: true}
});
let report = mongoose.model("Support", supportSchema);
support.createCollection();
module.exports = support;