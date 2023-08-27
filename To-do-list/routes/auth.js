const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const router = express.Router();


function Isvalidemail (emailadress) {
    const emailRegex = /[useremail]+@[gmail]+\.[com]/;
    return emailRegex.test(emailadress);
  }  
  
//creating registration router
router.post('/register',async (req,res)=>{
    try{
        const {username, email, password} = req.body;
        const hash = await bcrypt.hash(password, 10);
        if(Isvalidemail(email) === false){
            return res.status(501).json({error: 'Invalid email'});
        }
        const newuser= new User({username, email, password: hash});
        newuser.save();
        res.status(201).json(newuser);
    }catch{
        res.status(500).json({error: 'Server error'});
    }
});

module.exports = router;