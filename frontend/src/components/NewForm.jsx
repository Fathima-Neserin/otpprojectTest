import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const NewForm = () => {
  const [otp,setOtp]=useState('')
  const navigate=useNavigate()

  const submitForm = async () => {
    try {
        const submit = await axios.post('http://localhost:3001/otp/verifyotp', { otp }).then((response) => {
          if(response.data.message === 'Valid user'){
            navigate('/welcome')
        }else{
            alert(response.data.message)
        }
        })
        
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div className='styleform'>
            
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div className='input'>
      <TextField
        required
        id="outlined-required"
        label="Enter OTP"
        type='number'
        name='otp'
        value={otp}
        onChange={(event) => setOtp(event.target.value)}
        />
        <br/><br/>
        <Button id='btn' variant="contained" onClick={submitForm}><Link id='btn'>Submit</Link></Button>
        </div>
        </Box>
        </div>

    
  )
}

export default NewForm