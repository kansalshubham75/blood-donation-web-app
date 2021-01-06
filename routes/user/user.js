const express=require('express');
const { check, validationResult } = require('express-validator');
const {addUser} = require('../../controllers/user');
const User = require('../../models/User');
const router=express.Router();


//REGISTRATION ROUTE
//end-point : /api/user/
//method:POST
router.post('/', [check('name', 'Name is Required').not().isEmpty(),
check('email', 'Please include a valid email').isEmail(),
check('password', 'Minimum password length is 6').isLength({ min: 6 })],
(req,res)=>{
    const err=validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).json({ errors: err.array() });
    }else{
        addUser(req,res);
    }
});


module.exports=router;


