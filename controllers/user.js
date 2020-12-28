const User=require('../models/User');
const Profile=require('../models/Profile');
const bcryptjs=require('bcrypt');
const jwt=require('jsonwebtoken');

const addUser=async (req,res) =>{
    try{
        const {name,email,password,contact,bloodGroup,age}=req.body;
        const user=await User.findOne({email});

        if(user){
            res.status(409).json({
                msg:"User already exists"
            });
        }else{
            const user=new User({
                name,
                email,
                password
            });
            const salt = await bcryptjs.genSalt(10);
            user.password = await bcryptjs.hash(password, salt);
            user.save((err)=>{
                if(err){
                    throw err;
                }else{
                    const profile=new Profile({
                        userid:user._id,
                        contact,
                        bloodGroup,
                        age,
                    });
                    profile.save((err)=>{
                        if(err)throw err;
                        const payload={
                            userid:user._id
                        }
                        const jwtSecret=require('../config/jwt');
                        jwt.sign(payload,
                            jwtSecret,
                            { expiresIn: '1h' },
                            (err, token) => {
                                if (err) {
                                    throw err;
                                } else {
                                    console.log('sending token');
                                    res.json({ token });
                                }
                        });
                    });
                }
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Server Error"});
    }
}

module.exports=addUser;