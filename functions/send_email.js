
const dotenv = require('dotenv')
var nodemailer = require('nodemailer');

function sendEmailAfterRegister(userEmail) {
    var transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
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
function sendEmailAfterPasswordChange(userEmail,newTempPassword) {
    var transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_USER
        }
      });
      
      var mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'PLX  - zmiana hasła',
        text: 'Twoje nowe hasło to :'+newTempPassword +' zmien je zaraz po zalogowaniu sie!' // todo fancy text here
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}
function sendEmailToVerify(userEmail,verifyLink) {
    var transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_USER
        }
      });
      
      var mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'PLX  - weryfikacja adresu email',
        text: 'Zweryfikuj swój email' +verifyLink // todo fancy text here
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}
function sendEmailNewsletter([userEmail],newsletterText) {
    var transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_USER
        }
      });
      
      var mailOptions = {
        from: process.env.EMAIL_USER,
        to: [userEmail],
        subject: 'PLX  - newsletter'+ new Date().toLocaleDateString() ,
        text: newsletterText // todo fancy text here
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}