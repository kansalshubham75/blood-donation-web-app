const nodemailer=require('nodemailer');
const config=require('config');
const senderid=config.get('senderid');
const senderpass=config.get('senderpass');

const sendMail=async (to,text,subject)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: senderid,
          pass: senderpass
        }
      });
      
      var mailOptions = {
        from: senderid,
        to,
        subject,
        text
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