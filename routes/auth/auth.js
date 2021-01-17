const express=require('express');
const {getUser}=require('../../controllers/user');
const {check}=require('express-validator');
const jwtMiddleware = require('../../middleware/jwtMiddleware');
const User = require('../../models/User');
const router=express.Router();

//Validate token and send user object back
//endpoint /api/auth
//method get
router.get('/',jwtMiddleware,async(req,res)=>{
    try {
        console.log('api hit')
        const user=await User.findById(req.userid);
        const {name,email}=user;
        res.json({name,email});
    } catch (error) {
        res.status(500).json({msg:'Server Error'});
    }
});

//LOGIN
//end-point /api/auth/login
//method  post
router.post('/login',[check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 })],
    getUser
);


module.exports=router