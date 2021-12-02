const express = require("express");

const router = express.Router();

// náum í index síðuna og birtum hana
router.get("/",(req, res) => {
    const text = "Register page";
    let loggedIn = false;
    if (req.session.loggedIn) {
        loggedIn = true;
    } 
    res.render("contact",{title:"contact", text, loggedIn});
    
});


const nodemailer = require('nodemailer');

 

router.post('/', (req, res) => {
 // BREGÐAST VIÐ ÞEGAR NOTANDINN SMELLIR Á EMAIL 
 const text = 'Register page'
 let transport = nodemailer.createTransport({
 host: 'smtp.mailtrap.io',
 port: 2525,
 auth: {
 user: process.env.EMAIL_USERNAME,
 pass: process.env.EMAIL_PASSWORD
 }});

 const mailOptions = {
 from: 'vfor3jq05@gmail.com',
 to: 'email ykkar',
 subject: 'Sending Email using Node.js',
 text: 'That was easy!'
 };

 transport.sendMail(mailOptions, function(error, info){
 if (error) {
 console.log(error);
 } 
 else {
 console.log('Email sent: ' + info.response);
 res.redirect
 }});

});

module.exports = router;
    
