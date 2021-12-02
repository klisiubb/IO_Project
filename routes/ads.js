const express = require('express');
const router = express.Router();

const ad = require("../models/ad");
const report = require("../models/report");

//<!--- Add an ad ---!>
router.get('/add', (req,res)=>{
    res.render('add');
})

//<!---POST an ad ---!>
router.post('/add', (req,res)=>{
    const {title,description, category_id,phone,photo1} = req.body;
    let errors = [];
    if(!title || !description || !phone || !photo1 || !category_id) {
        errors.push({msg : "Wypełnij wszystkie pola."})
    }
    if(description.length < 40 ) {
        errors.push({msg : 'Opis ogłoszenia musi miec więcej niż 20 znaków'})
    }
    if(title.length < 10 ) {
        errors.push({msg : 'Tytul ogłoszenia musi miec więcej niż 10 znaków'})
    }
    if(errors.length > 0 ) {
        res.render('add', {
            errors : errors,
            title : title,
            description : description,
            phone : phone,
            category_id : category_id,
            photo1: photo1
        })
         } else {
             //todo
         }
})
//<!--- report  an ad POST ---!>
router.post('/report', (req,res)=>{
    res.send('Reported an ad.Thank you!');
    //TODO
})
//<!--- edit an ad ---!>
router.get('/edit', (req,res)=>{
    res.render('edit');
})

//<!--- edit POST ---!>
router.post('/edit', (req,res)=>{
    //TODO
})