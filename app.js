const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const path=require('path')

const app=new express();

require('dotenv').config();
const morgan=require('morgan');

// Routes

const OtpRoutes=require('./routes/otpRoutes')




// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({extended: false}));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use(bodyParser.json());



 
app.use('/otp', OtpRoutes)



app.use(morgan('dev'));
app.use(cors());


const PORT=process.env.PORT


app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})