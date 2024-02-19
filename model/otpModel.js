const mongoose=require('mongoose');

const MONGO_URL=process.env.MONGO_URL

mongoose.connect(MONGO_URL)


const  OTPSchema=mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    
   otp:{
    type :  String,
    
          }
 } )


const OTP=mongoose.model('email&otp' , OTPSchema);
module.exports=OTP;
