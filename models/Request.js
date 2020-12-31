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
    email:{
        type:String,
        required:true
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
        type:String,
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
    //0=active and unassigned
    //1=active and assigned
    //2=resolved
    active:{
        type:Number,
        default:0,
        required:true
    }
});

const Request = mongoose.model('request',RequestSchema);
module.exports=Request;