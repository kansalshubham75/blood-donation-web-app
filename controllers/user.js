const User=require('../models/User');
const Profile=require('../models/Profile');
const bcryptjs=require('bcrypt');
const jwt=require('jsonwebtoken');
const config=require('config');
const jwtSecret=config.get('jwtSecret');
const {validationResult}=require('express-validator');

const addUser=async (req,res) =>{
    try{
        const {name,email,password,contact,bloodGroup,age}=req.body;
        const user=await User.findOne({email});

        if(user){
            res.status(409).json({
                msg:"User already exists"
            });
        }else{
            const salt = await bcryptjs.genSalt(10);
            encpassword = await bcryptjs.hash(password, salt);
            const user=new User({
                name,
                email,
                password:encpassword
            });

            await user.save();
                
            const profile=new Profile({
                userid:user._id,
                contact,
                bloodGroup,
                age,
            });
            await profile.save();

            const payload={
                userid:user._id
            }
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
        }
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Server Error"});
    }
}

const getUser=async (req,res)=>{
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            res.status(409).json({errors:errors.array()})
        }
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            const isValid=await bcryptjs.compare(password,user.password);
            if(!isValid){
                res.status(400).json({msg:'Invalid Credentials'})
            }else{
                const payload={
                    userid:user._id
                }

                jwt.sign(payload,
                    jwtSecret,
                    {expiresIn:'1h'},
                    (err,token)=>{
                        if(err){
                            throw err
                        }else{
                            res.json({token});
                        }
                    });
            }
        }else{
            res.status(400).json({msg:'User not found'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Server Error"});
    }
}

module.exports={addUser,getUser};