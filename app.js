const express = require('express');
const mongoose=require('mongoose');
const path=require('path');
const cors=require('cors');
const bodyParser = require('body-parser');
const config=require('config');
const db=config.get('mongoURI');
const port = process.env.PORT || 5000;

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
    .then(()=>console.log('Database connected'))
    .catch((err)=>console.log(err));

app.use('/api/user',require('./routes/user/user')); //registration
app.use('/api/auth',require('./routes/auth/auth')); //login
app.use('/api/request',require('./routes/request/request'));

// app.use(express.static('blood-bank/public'));
// app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'blood-bank','public','index.html'))
// })

app.listen(port,()=>{
    console.log("server started")
})
