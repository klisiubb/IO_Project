const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require('../config/auth') 
//login page
router.get('/', (req,res)=>{
    res.render('index',{
        user: req.user
    });
})
//register page
router.get('/register', (req,res)=>{
    res.render('register_new');
})
router.get('/dashboard',(req,res)=>{
    res.render('index',{
        user: req.user
    });
})
module.exports = router; 