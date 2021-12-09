const mongoose = require('mongoose');
const { Schema } = mongoose;

const userReportSchema = new Schema({
    report_id:{  // id of report
     type: Number,
     required : true
    },
    reporter_id:{ // id of user which report
        type: Number,
        required : true
       },
    user_id:{ // id of reported user
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
let report = mongoose.model("userReport", userReportSchema);
userReport.createCollection();
module.exports = userReport;