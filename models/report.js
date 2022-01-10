const mongoose = require('mongoose');
const { Schema } = mongoose;

const reportSchema = new Schema({
    reporter_id:{ // id of user which report
        type: String,
        required : true
       },
    ad_id:{ //reported AD ID to verify
    type: String,
    required : false,
    default: "Zgłoszenie użytkownika"
    }, 
    description: { // description of report
    type: String,
    required : true
    },
    date:{
    type: String,
    default: Date.now,
    required: true}
});
let report = mongoose.model("Report", reportSchema);
report.createCollection();
module.exports = report;