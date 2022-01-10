const mongoose = require('mongoose');
const nodemon = require('nodemon');
const UserSchema  = new mongoose.Schema({
  login :{
      type  : String,
      required : true
  } ,
  email :{
    type  : String,
    required : true
} ,
registerTime:{
type:String,
required: true
},
location:{
type:String,
required:false,
default: "Lokalizacja ukryta"
},
phone:{
    type:String,
    required: false,
    default:"Telefon ukryty"
},
password :{
    type  : String,
    required : true
} ,
avatar :{
    type  : String,
    required : false,
    default: "default.svg",
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