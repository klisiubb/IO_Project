
const dotenv = require('dotenv')
var nodemailer = require('nodemailer');

function sendEmailAfterRegister(userEmail) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_USER
        }
      });
      
      var mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'PLX  - Witamy na portalu PLX',
        text: 'Dziękujemy za rejestrację' // todo fancy text here
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}