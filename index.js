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
var User = require("./models/userModel");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
secret: "plx2021",
resave: false,
saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//Main page
app.get('/', (req, res) => {
  res.render('index')
})
// After login page only for testing
app.get("/logged", isLoggedIn, function (req, res) {
  res.render("logged");
  });
// Register page
app.get("/register", function (req, res) {
  res.render('register', {
  title: 'Rejestracja - PLX',
  login: '',
  email: '',
  password: ''    
  })
  });
// register form post
  app.post("/register", function (req, res) {
    var email = req.body.email
    var password = req.body.password
    User.register(new User({ email: email }),
    password, function (err, user) {
    if (err) {
    console.log(err);
    return res.render("register");
    }
    passport.authenticate("local")(
    req, res, function () {
    req.flash('success', 'Zarejestrowano!')
    res.render("logged");
    });
    });
    });
    // login page
  app.get("/login", function (req, res) {
      res.render('login', {
      title: 'Logowanie - PLX',
      email: '',
      password: ''     
      })
      });
// login post
app.post("/login", passport.authenticate("local", {
  successRedirect: "/logged",
  failureRedirect: "/login"
  }), function (req, res) {
  });
//logout
app.get("/logout", function (req, res) {
  req.logout();
    res.redirect("/");
    });

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
    res.redirect("/login");
}
app.listen(port, () => {
  console.log(`Portal PLX działa na porcie: ${port}`)
})