const mongoose = require('mongoose');
const { Schema } = mongoose;

const reportSchema = new Schema({
    report_id:{ 
     type: int,
     required : true
    },
    reporter_id:{ // id of user 
        type: int,
        required : true
       },
    title:{  
    type: String,
    required : true
    },
    ad_id:{ //reported AD ID to verify
    type: int,
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