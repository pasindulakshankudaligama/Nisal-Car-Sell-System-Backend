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

router.post('/',async (req,res)=>{
    const cars=new Car({
        regNo:req.body.regNo,
        description:req.body.description,
        brandName:req.body.brandName
    })
    try{
        const response=await cars.save();
        res.json(response)
    }catch (e) {
        res.send('error :'+e)
    }
})

module.exports = router;