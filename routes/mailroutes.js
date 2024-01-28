const express=require('express');
const router=express.Router();
const Email=require('../model/emailModel')

router.post('/email',(req,res)=>{
     
        const { email } = req.body;
        Email.findOne({email}).then((email)=>{
        
            const token = jwt.sign({email: Email.email}, process.env.ACCESS_TOKEN_SECRET)
            const refreshToken = jwt.sign({username: mentor.username}, process.env.REFRESH_TOKEN_SECRET)
    
            console.log('Token:', token);
            console.log('Refresh Token:', refreshToken);
    
            return res.status(201).send({ email, token, refreshToken})
          })
        })
    
        

    


module.exports=router;
