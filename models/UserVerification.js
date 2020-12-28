const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserVerificationSchema = new Schema({
    hash:{
        type:String,
        required:true
    },
    destination:{
        type:Schema.ObjectId,
        ref:'users'
    }
})

const UserVerification = mongoose.model('verification',UserVerificationSchema);
module.exports = UserVerification;