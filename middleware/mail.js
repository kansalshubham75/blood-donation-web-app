const nodemailer=require('nodemailer');
const {senderid,senderpass}=require('../config/mail');

const sendMail=async (recipientid,hash,donator)=>{
    console.log(senderid,senderpass);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: senderid,
          pass: senderpass
        }
      });
      const msg=`We are pleased to tell you that ${donator} has stepped up as a volunteer for your request and will be 
                contacting you. After donating you need to click this link to verify donation https://localhost:5000/verify/${hash}`;
    //   console.log(hash);
      var mailOptions = {
        from: senderid,
        to: recipientid,
        subject:"We found you a volunteer!!",
        text: msg
      };
      try {
        await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          
      } catch (error) {
          console.log(error);
      }
}

module.exports=sendMail