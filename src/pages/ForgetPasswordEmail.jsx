import * as React from 'react';
import { useState} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/ButtonBase';

import {Container} from '@mui/material'
import '../pages/My.css'






 function ForgetPasswordEmail() {
    const [email, setEmail]=useState("")
    
   

    //const header = new Headers({ "Access-Control-Allow-Origin": "http://localhost:3000" });


    //const handleClick=(e)=>{
     // e.preventDefault()
     // const Blog={title, tagName, description, publisher, url}
     // console.log(Blog)
      //fetch("http://localhost:2020/blog/post", { headers: {"Access-Control-Allow-Origin": "*"}, })
     // fetch("http://localhost:2020/blog/post")
     // .then((res) => res.json())
      //.then((data) => alert("New user added"));}

      //window.location.replace("http://localhost:3000")
      
      //fetch("http://localhost:2020/Blog/Post", { headers: header })
      //.then((res) => res.json())
      //.then((data) => alert("New user added"));}



  return (
    
      <div className="PostPropertyBackground">
       
          <Container  className="min-h-screen flex flex-col text-black ">
            
            <Box 
            action="http://localhost:2020/forgot-password" object="forgotPasswordForm" method="POST"
              component="form"  encType="multipart/form-data"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <h1 style={{color:"blue"}}><u> Forget Password </u></h1>
                <p style={{color:"green"}}><u> We will send a reset password link to your email </u></p>
              <TextField  type="email" label="Email" color="secondary" name="email"focused  
              value={email}
              onChange= {(e) => setEmail(e.target.value)}
              /><br></br>
              

              <Button style={{background:"blue", color:"white", width:"100px", height:"anto", padding:"5px", size:"20px"}}type="submit">SUBMIT</Button>
              </Box>
                  
            </Container>

        </div>
  );
    }

    export default ForgetPasswordEmail
  
   