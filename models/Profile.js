const mongoose=require('mongoose');

const ProfileSchema= new mongoose.Schema({
    userid:{
        type: mongoose.Schema.ObjectId,
        ref:'users'
    },
    contact:{
        type: Number,
        required: true,
        unique: true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    active:[mongoose.Schema.Types.ObjectId],
    history:[mongoose.Schema.Types.ObjectId]
});

const Profile=mongoose.model('profile',ProfileSchema);
module.exports=Profile;