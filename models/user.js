const mongoose = require('mongoose');
const UserSchema  = new mongoose.Schema({
  login :{
      type  : String,
      required : true
  } ,
  email :{
    type  : String,
    required : true
} ,
password :{
    type  : String,
    required : true
} ,
date :{
    type : Date,
    default : Date.now
},
profilepic :{
    type  : String,
    required : false,
    default: "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-user-interface-kiranshastry-gradient-kiranshastry.png",
} ,
});
const User= mongoose.model('User',UserSchema);

module.exports = User;