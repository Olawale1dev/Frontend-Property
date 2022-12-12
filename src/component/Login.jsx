import * as React from 'react';
import { useState} from 'react';
import Header from '../pages/Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/ButtonBase';

import {Container} from '@mui/material'
import '../pages/My.css'






 function BlogPost() {
    const [email, setEmail]=useState("")
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const onSubmit = (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
  
      fetch("http://localhost:2020/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.fieldErrors) {
            data.fieldErrors.forEach(fieldError => {
              if(fieldError.field === 'email'){
                setEmailError(fieldError.message);
              }
  
              if(fieldError.field === 'password'){
                setPasswordError(fieldError.message);
              }
            });
          } else {
            alert("Success !!");
          }
        })
        .catch((err) => err);
    }

   

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
    <div>
      <Header/>
      <div className="PostPropertyBackground">
         
       
          <Container  className="min-h-screen flex flex-col text-black ">
            
            <Box object="LoginRequestDto" 
              action="http://localhost:2020/login"
              method="POST"
              component="form" encType="multipart/form-data"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <h1 style={{color:"blue"}}><u> Add Blog Post </u></h1>
              <TextField  type="email" label="Email" color="secondary" name="email"focused  
              value={email}
              onChange= {(e) => setEmail(e.target.value)}
              />
                {
                  emailError ? <span style={{ color: 'red', fontSize: '12px'}}>{emailError}</span> : ''
                }
              <br></br>
              

              <TextField type="password" label="Password" color="secondary" name="password" focused  
              value={password}
              onChange= {(e) => setPassword(e.target.value)}
              />
              {
                passwordError ? <span style={{ color: 'red', fontSize: '12px'}}>{passwordError}</span> : ''
              }
              <br></br>
              
             

              <Button style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px"}}type="submit" onSubmit={onSubmit}>SAVE</Button>
              </Box>
              <a href="http://localhost:3000/forgotPassword">Forgot Password</a><br></br>
              Don't Have an Accout Yet!
          <Button href="http://localhost:3000/signup"  style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px"}}> Sign up</Button>    
            </Container>

        </div>
     </div>   
  );
    }

    export default BlogPost
  
   