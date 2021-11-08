const mongoose = require("../functions/databaseConnector");
 
var userSchema = new mongoose.Schema({
            login: String,
            password: String,
            email:String,
        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);