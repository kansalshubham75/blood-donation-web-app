const express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser = require('body-parser');
const db=require('./config/db');
const port = process.env.PORT || 5000;

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect(db,{useNewUrlParser:true})
    .then(()=>console.log('Database connected'))
    .catch((err)=>console.log(err));

app.use('/api/user',require('./routes/user/user'));
app.listen(port,()=>{
    console.log("server started")
})
