import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const NewForm = () => {
  return (
    <div>
            <div style={{width: "350px" , height : "400px", color: "green"}}>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="OTP"
        type='number'
        defaultValue="Enter OTP sent to your email."
        />
        <br/>
        <Button variant="contained" >Submit</Button>
        </div>
        </Box>
        </div>

    </div>
  )
}

export default NewForm