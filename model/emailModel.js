const mongoose=require('mongoose');

const MONGO_URL=process.env.MONGO_URL

mongoose.connect(MONGO_URL)


const  EmailSchema=mongoose.Schema(
    
    email :  String,
         
)


const EmailData=mongoose.model('emaildata' ,EmailSchema);
module.exports=EmailData;
