const express = require('express');
const router = express.Router();

const Car = require('../model/car.model');


router.get('/',async (req,res)=>{
    try{
        const response=await Car.find();
        res.json(response)
    }catch (e) {
        res.send('error :'+e)
    }
})

module.exports = router;