import * as React from 'react';
import { useState} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/ButtonBase';

import {Container} from '@mui/material'
import '../pages/My.css'






function checkPasswordMatch(fieldConfirmPassword) {
    if (fieldConfirmPassword.value !== ("#password").val()) {
        fieldConfirmPassword.setCustomValidity("Passwords do not match!");
    } else {
        fieldConfirmPassword.setCustomValidity("");
    }
}


 function ResetPassword() {
    const [password, setPassword]=useState("")

    
   

    //const header = new Headers({ "Access-Control-Allow-Origin": "http://localhost:3000" });




  return (
    
      <div className="PostPropertyBackground">
       
          <Container  className="min-h-screen flex flex-col text-black ">
            
            <Box 
            action="http://localhost:2020/user/reset_password"  method="POST"
              component="form" encType="multipart/form-data"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <h1 style={{color:"blue"}}><u> Reset Your Password </u></h1>
                
              <TextField  type="password" label="Password" color="secondary" name="password" placeholder="Enter your new password" required focused  
              value={password}
              onChange= {(e) => setPassword(e.target.value)}
              /><br></br>

                <TextField  type="password" label="Password" color="secondary"  placeholder="Confirm your new password" required focused  
              value={password}
              onChange= {(e) => setPassword(e.target.value)}
              oninput={checkPasswordMatch} /><br></br>
              

              


              <Button style={{background:"blue", color:"white", width:"100px", height:"anto", padding:"5px", size:"20px"}}type="submit">SUBMIT</Button>
              </Box>
                  
            </Container>

        </div>
  );
    }

    export default ResetPassword
   