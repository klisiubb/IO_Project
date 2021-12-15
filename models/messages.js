const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    ad_id:{  // ad id
        type: Number,
        required : true
       },
    owner_id:{  // id of ad owner
     type: Number,
     required : true
    },
    owner_messages: { //array of msg
        type: [String],
        required : true
        },
    buyer_id:{  // id of a buyer
     type: Number,
     required : true
    },
    buyer_messages: { //array of msg
        type: [String],
        required : true
        },
    message_dates:{
    type: [Date], // date n time of msg
    default: Date.now,
    required: true}
});
let report = mongoose.model("Messages", messageSchema);
message.createCollection();
module.exports = message;