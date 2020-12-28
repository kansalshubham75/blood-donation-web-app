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
    active:[{
        isActive:{
            type:Boolean,
            default:false
        },
        request:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'requests'
        }
    }],
    history:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'requests'
    }]
});

const Profile=mongoose.model('profile',ProfileSchema);
module.exports=Profile;