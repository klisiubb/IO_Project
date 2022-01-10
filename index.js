const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const path = require('path')
const cookieParser = require('cookie-parser')
app.use(cookieParser('abcdefg'));
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static('uploads'));
//passport config:
const {ensureAuthenticated} = require('./config/auth') 
require('./config/passport')(passport)
//mongoose
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected to DB'))
.catch((err)=> console.log(err));

//EJS
app.set('view engine','ejs');
//BodyParser
app.use(express.urlencoded({extended : false}));
//express session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })
    
//Routes
app.use('/',require('./routes/index'));
app.use('/add',ensureAuthenticated,require('./routes/ads'));
app.use('/users',require('./routes/users'));
app.use(function (req,res,next){
    res.status(404).render('404');
});

app.listen(3000);