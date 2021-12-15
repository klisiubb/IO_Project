const express = require('express');
const router = express.Router();
const User = require("../models/user_schema");
const bcrypt = require('bcrypt');
const passport = require('passport');

//<!--- Login user ---!>
router.get('/login',(req,res)=>{
    res.render('login_new');
})

//<!--- Login user POST ---!>
router.post('/login',(req,res,next)=>{
passport.authenticate('local',{
    successRedirect : '/dashboard',
    failureRedirect: '/users/login',
    failureFlash : true
})(req,res,next)
})

//<!--- Register user ---!>
router.get('/register',(req,res)=>{
    res.render('register_new')
    })

//<!--- Register user POST ---!>
  router.post('/register',(req,res)=>{
    const {login,email, password, password2} = req.body;
    let errors = [];
    // console.log(' login ' + login+ ' email :' + email+ ' pass:' + password);
    if(!login || !email || !password || !password2) {
        errors.push({msg : "Wypełnij wszystkie pola."})
    }
    //check if match
    if(password !== password2) {
        errors.push({msg : "Hasła nie są takie same"});
    }
    
    //check if password is more than 6 characters
    if(password.length < 6 ) {
        errors.push({msg : 'Hasło musi mieć więcej niż 6 znaków.'})
    }
    if(errors.length > 0 ) {
    res.render('register_new', {
        errors : errors,
        login : login,
        email : email,
        password : password,
        password2 : password2})
     } else {
        //validation passed
       User.findOne({email : email}).exec((err,user)=>{
        console.log(user);   
        if(user) {
            errors.push({msg: 'Email już zarejestrowany.'});
            res.render('register_new',{errors,login,email,password,password2})  
           } else {
            const newUser = new User({
                login : login,
                email : email,
                password : password
            });
    
            //hash password
            bcrypt.genSalt(10,(err,salt)=> 
            bcrypt.hash(newUser.password,salt,
                (err,hash)=> {
                    if(err) throw err;
                        //save pass to hash
                        newUser.password = hash;
                    //save user
                    newUser.save()
                    .then((value)=>{
                        console.log(value)
                        req.flash('success_msg','Zarejestrowano!');
                        res.redirect('/users/login');
                    })
                    //.catch(value=> console.log(value));
                      
                }));
             }
       })
    }
    })

//<!--- Logout user ---!>
router.get('/logout',(req,res)=>{
req.logout();
req.flash('success_msg','Wylogowano!');
res.redirect('/users/login'); 
})

//<!--- Reset password ---!>
router.get('/resetpass', (req,res)=>{
    res.render('resetpass');
})

//<!--- Reset password POST ---!>
router.post('/resetpass', (req,res)=>{
    //TODO
})

//<!--- Verify email ---!>
router.get('/verifyemail', (req,res)=>{
    res.render('verify_email');
})

//<!--- Verify email POST ---!>
router.post('/verifyemail', (req,res)=>{
    //TODO
})
//<!--- delete user GET ---!>
router.get('/deleteuser', (req,res)=>{
    console.log("Deleted user");
    res.render('delete',{
        user: req.user
    });
})
//<!--- delete user POST ---!>
router.post('/deleteuser', (req,res)=>{
    userID = req.user.login;
    User.deleteOne({ _id: userID }, function (err) {
        if (err) return handleError(err);
      });
      console.log("Deleted user");
      res.redirect('/dashboard');
})
//<!--- edit profile ---!>
router.get('/edituser', (req,res)=>{
    res.render('edituser');
})

//<!--- edit profile POST ---!>
router.post('edituser', (req,res)=>{
    //TODO
})

//<!--- View other user account -->
//router.use('/user/:id')
//router.get('/user/:id', (req,res)=>{
    //req.params.id;
    //find user by id todo
    //res.render('viewuser');
//})
module.exports = router;    