
const OTP=require('../model/otpModel')
const nodemailer = require('nodemailer');

const generateOTP = async (email) => {
  // Generate a random OTP
  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  // Save the OTP to the database
  await OTP.create({ email, otp });

  // Send the OTP to the provided email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fneserin@gmail.com',
      pass: 'oyks mrwk omez ikyy'

    },
  });

  const mailOptions = {
    from: 'fneserin@gmail.com',
    to: email,
    subject: 'OTP Generation',
    text: `OTP for your request is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending OTP email:', error);
      console.error(error.stack);  
    } else {
      console.log('OTP sent successfully');
    }
  });
  
}
const verifyOTP = async (req, res) => {
  const { otp } = req.body;

  const matchOtp = await database.findOne({otp})
  
  if(matchOtp){
      res.status(200).json({ message: 'Valid user'})
  }else{
      res.status(200).json({ message: 'User Invalid'})
  }
};

module.exports = {
  generateOTP,
  verifyOTP,
};