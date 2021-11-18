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
  username: '',
  email: '',
  password: ''    
  })
  });
// register form post
  app.post("/register", function (req, res) {
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password
    User.register(new User({ email: email, username:username }),
    password, function (err, user) {
    if (err) {
    console.log(err);
    return res.render("register");
    }
    passport.authenticate("local")(
    req, res, function () {
    //req.flash('success', 'Zarejestrowano!')
    res.render("logged");
    });
    });
    });
    // login page
  app.get("/login", function (req, res) {
      res.render('login', {
      title: 'Logowanie - PLX',
      username: '',
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
// Ads
app.get("/add", function (req, res) {
  res.render("add");
  });

// Success of adding an ad
app.get("/success", function (req, res) {
res.render("success");
});
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
    res.redirect("/login");
}
// adding an ad post req
app.post('add', (req, res) => {
  var title = req.body.tytulOgloszenia
  var category_id =  req.body.kategoria
  var description  =  req.body.opisOgloszenia
  var phone  =  req.body.numerTelefonu
  //todo 
})
//test code

// end of test code
app.listen(port, () => {
  console.log(`Portal PLX działa na porcie: ${port}`)
})