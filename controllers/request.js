const Request = require('../models/Request');
const Profile = require('../models/Profile');
const User = require('../models/User');
const { v4 } = require('uuid');
const sendMail = require('../middleware/mail');
const RequestVerification = require('../models/RequestVerification');
const config = require('config');

//post a new request
const addRequest = async (req, res) => {
    const { name, contact, email, country, state, city, address, bloodGroup } = req.body;
    const request = new Request({
        name,
        contact,
        email,
        country,
        state,
        city,
        address,
        bloodGroup,
        active: 0
    })
    try {
        await request.save();
        res.status(200).json({ msg: "Request sent successfully" })
    } catch (error) {
        res.status(500).json({ msg: "Request failed, Intenal error" })
    }
}

//get all active requests with matching bg
const getRequests = async (req, res) => {
    const userid = req.userid;
    try {
        const user = await Profile.findOne({ userid });
        const { bloodGroup } = user;
        const requests = await Request.find({ bloodGroup, active: 0 });
        res.json({ requests });
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
}

//accept a request with a given id
const acceptRequest = async (req, res) => {
    const requestid = req.params.id;
    const userid = req.userid;
    try {
        const userProfile = await Profile.findOne({ userid });
        if (userProfile.active.length !== 0) {
            res.status(400).json({ msg: "You already have a pending request" })
        }
        const request = await Request.findByIdAndUpdate(requestid, { $set: { active: 1, assignedto: userid } });
        var arr = [];
        arr.push(requestid);
        await Profile.findOneAndUpdate({ userid }, { $set: { active: arr } });
        const hash = v4();
        // console.log(hash);
        const verification = new RequestVerification({
            hash,
            requestid
        });
        const user = await User.findById(userid);
        // const request=await Request.findById(requestid);
        await verification.save();
        const baseURI = config.get('baseURI');
        const msg = `We are pleased to tell you that ${user.name} has stepped up as a volunteer for your request and will be 
        contacting you. After donating you need to click this link to verify donation 
        <a href=${baseURI}/api/request/verify/${hash}>${baseURI}/api/request/verify/${hash}<\a>`;
        sendMail(request.email, msg, "We found you a volunteer!!");
        res.status(200).json({ msg: "Success" });
    } catch (error) {
        console.log(error);
    }
}

const verifyRequest = async(req, res) => {
    const hash = req.params.hash;
    try {
        const doc = await RequestVerification.findOne({ hash });
        if (doc) {
            const requestid = doc.requestid;
            const request = await Request.findById(requestid);
            const userid = request.assignedto;
            const profile = await Profile.findOne({ userid });
            const newhistory = [...profile.active, ...profile.history];
            await Profile.findOneAndUpdate({ userid }, { $set: { active: [], history: newhistory } })
            await Request.findByIdAndUpdate(requestid, { $set: { active: 2 } });
            await RequestVerification.findOneAndDelete({hash});
            res.json({msg:"Request completion verified"});
        } else {
            res.status("400").json({ msg: "Invalid url" });
        }
    } catch (error) {
        res.status(400).json({ msg: "Server error" });
    }
}
module.exports = { getRequests, addRequest, acceptRequest, verifyRequest };