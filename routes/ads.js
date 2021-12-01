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
    //TODO
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