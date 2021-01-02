const express =require('express');
const {addRequest,getRequests,acceptRequest,verifyRequest}=require('../../controllers/request');
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

//accept a request
router.get('/accept/:id',jwtMiddleware,acceptRequest);

//verify request
router.get('/verify/:hash',verifyRequest);

module.exports=router;


