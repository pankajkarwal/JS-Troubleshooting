# Node-JS-Email-Troubleshooting
First Stop the 2 Way Authentication in Gmail See the Image 2
Second Turn On the Less Secure App

Now You can send the email

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abc@gmail.com',
    pass: 'abc@123'
  }
});

var mailOptions = {
  from: 'abc@gmail.com',
  to: 'xyz@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

# Dynamically Saved incoming json field data into Mysql 
See the server.js file
