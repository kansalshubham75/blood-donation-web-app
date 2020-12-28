const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const RequestSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type: Number,
        required: true,
        unique: true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        required:true
    },
    address:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:true,
        required:true
    }
});

const Request = mongoose.model('request',RequestSchema);
module.exports=Request;