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
moderator:{
  type: Boolean, // to check if user is an moderator, to access moderate functions
  default: false  
},
ad_limit:{
 type: Number, // limit of ads per user, may be changed in the future for $$$
 default: 3
}
});
const User= mongoose.model('User',UserSchema);

module.exports = User;