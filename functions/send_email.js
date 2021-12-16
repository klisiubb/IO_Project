
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
function sendEmailToVerify(userEmail,verifyLink) { // can be also used to change email
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
function sendEmailNewMessage(userEmail,adTitle) { 
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
        subject: 'PLX  - masz nową wiadomość dotyczącą ogłoszenia ' +adTitle,
        text: 'Zaloguj się i zobacz bo nie chce mi sie robic direct linkow to sobie wejdz na strone i sie zaloguj' // todo fancy text here
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}
function sendEmailStarredCategory(userEmail,starredCategory) { //notify users about starred categories, just to let em know when to buy new iphone etc 
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
        subject: 'PLX  - pojawił się nowy przedmiot z kategori ' +starredCategory +' .',
        text: 'Zaloguj się i kup teraz.' // todo fancy text here
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}