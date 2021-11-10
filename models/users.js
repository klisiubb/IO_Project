//const mongoose = require("../functions/databaseConnector");
var passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true });   
const { Schema } = mongoose;

const userSchema = new Schema({
  username:  String, 
  password: String,
  email:   String,
});
userSchema.plugin(passportLocalMongoose);
let User = mongoose.model("User", userSchema);
User.createCollection();
module.exports = User;