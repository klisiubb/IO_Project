const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
app.set('view engine', 'hbs');
app.use(express.static('public'))
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/users");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
secret: "plx2021",
resave: false,
saveUninitialized: false
}));

//passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// end of test code
app.listen(port, () => {
  console.log(`Portal PLX działa na porcie: ${port}`)
})