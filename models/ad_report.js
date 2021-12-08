const mongoose = require('mongoose');
const { Schema } = mongoose;

const reportSchema = new Schema({
    report_id:{  // id of report
     type: Number,
     required : true
    },
    reporter_id:{ // id of user which report
        type: Number,
        required : true
       },
    ad_id:{ //reported AD ID to verify
    type: Number,
    required : true
    }, 
    description: { // description of report
    type: String,
    required : true
    },
    date:{
    type: Date,
    default: Date.now,
    required: true}
});
let report = mongoose.model("Report", reportSchema);
report.createCollection();
module.exports = report;