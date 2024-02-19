import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '../index.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Form = () => {

  const [ email, setEmail ] = useState('')
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log('Before Axios Request');
        const response = await axios.post('http://localhost:3001/otp/generateOTP', { email });
        console.log('After Axios Request');

        if (response.data) {
            console.log('Navigate to /new');
            navigate('/new');
        }
    } catch (error) {
        console.log('Error:', error);
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
        label="Email"
        name='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
        <br/><br/>
        <Button id='btn' variant="contained" onClick={onSubmit} ><Link id='btn'>Submit</Link></Button>
        </div>
        </Box>
        </div>
  )
}

export default Form