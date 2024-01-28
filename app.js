const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const app=new express();

require('dotenv').config();
const morgan=require('morgan');






// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({extended: false}));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use(bodyParser.json());



var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fneserin@gmail.com',
    pass: 'oyks mrwk omez ikyy'
  }
});

var mailOptions = {
  from: 'fneserin@gmail.com',
  to: 'fathimanezrin2001@gmail.com',
  subject:'OTP for your request is 123 456'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

app.use(morgan('dev'));
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

const PORT=process.env.PORT


app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})