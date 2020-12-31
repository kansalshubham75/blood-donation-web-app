const Request = require('../models/Request');
const Profile = require('../models/Profile');
const {v4}= require('uuid');


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
    const req_id = req.params.id;
    const userid = req.userid;
    try {
        const userProfile = await Profile.findOne({ userid });
        if (userProfile.active.length !== 0) {
            res.status(400).json({ msg: "You already have a pending request" })
        }

        await Request.findByIdAndUpdate(reqid, { $set: { active: 1 } });
        const activeArr=[{req_id}];
        await Profile.findOneAndUpdate({userid},{$set:{active:activeArr}});
        const hash=v4();
        
    } catch (error) {

    }
}

module.exports = { getRequests, addRequest, acceptRequest };