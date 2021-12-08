const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require('../config/auth') 
//<!--- FAQ ---!>
router.get('/faq',(req,res)=>{
    res.render('faq');
})
//<!--- Support ---!>
router.get('/support',(req,res)=>{
    res.render('support');
})
//<!--- Support post ---!>
router.post('/support',(req,res)=>{
    const {title,message} = req.body;
    let errors = [];
    if(!title || !message) {
        errors.push({msg : "Wypełnij wszystkie pola."})
    }
    if(message < 40){
        errors.push({msg: "Napisz wiecej niz 40 znakow"})
    }
    if(errors.length > 0 ) {
        res.render('register_new', {
            errors : errors,
            title : title,
            message : message,
})
         } else {
             //todo add to db
          }
})