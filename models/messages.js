const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    ad_id:{  // ad id
        type: String,
        required : true
       },
    // owner_id:{  // id of ad owner
    //  type: String,
    //  required : true
    // },
    owner_messages: [{ //array of msg
        type: String,
        required : false
        }],
    buyer_id:{  // id of a buyer
     type: String,
     required : true
    },
    buyer_messages: [{ //array of msg
        type: String,
        required : false
        }],
    message_dates:[{
    type: String, // date n time of msg
    required: true}],
    is_sold:{//disable messages if user sold the item
        type: Boolean,
        default: false
    }
});
let message = mongoose.model("Messages", messageSchema);
message.createCollection();
module.exports = message;