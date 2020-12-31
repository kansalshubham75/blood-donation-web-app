const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const RequestVerificationSchema = new Schema({
    hash:{
        type:String,
        required:true
    },
    requestid:{
        type:Schema.ObjectId,
        ref:'requests'
    }
})

const RequestVerification = mongoose.model('verification',RequestVerificationSchema);
module.exports = RequestVerification;