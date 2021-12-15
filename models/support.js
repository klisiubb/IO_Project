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
    support_messages: { //response of support
        type: [String],
        required : true
        },
    message_dates:{
    type: [Date],
    default: Date.now,
    required: true},
    is_solved:{ //disable new messages if problem is solved
        type:Boolean,
        default: false
    }
});
let report = mongoose.model("Support", supportSchema);
support.createCollection();
module.exports = support;