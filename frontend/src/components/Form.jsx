import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




const Form = () => {
  return (
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
        label="Email"
        defaultValue="Enter your Email"
        />
        <br/>
        <Button variant="contained" >Submit</Button>
        </div>
        </Box>
        </div>
  )
}

export default Form