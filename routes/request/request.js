const express =require('express');
const {addRequest,getRequests}=require('../../controllers/request');
const jwtMiddleware = require('../../middleware/jwtMiddleware');
const router=express.Router();

//add request
//endpoint : /api/request
//method: post
router.post('/',addRequest);

//get requests with matching bg
//endpoint : /api/request
//method: get
router.get('/',jwtMiddleware,getRequests);

module.exports=router;


