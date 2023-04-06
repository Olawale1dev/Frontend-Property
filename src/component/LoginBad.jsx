import * as React from 'react';
import { useState} from 'react';
import Header from '../pages/Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/ButtonBase';

import {Container} from '@mui/material'
import '../pages/My.css'






 function LoginBad() {
    const [email, setEmail]=useState("")
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    //const formData = new FormData(e.target);
    const onSubmit = async (e) => {
      e.preventDefault();
      //let res = await
      const formData = new FormData(e.target);
      //let res = await res.json();
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
      
        .then((res) => res.json())
        .then((resJson) => {
          if(resJson.status === 200 ) {
            alert("Success !!!")
            setTimeout(function(){window.location.replace("http://localhost:3000");}, 2000)
          } else {
            alert("Bad Credentials");
            setTimeout(function(){window.location.replace("http://localhost:3000/login");}, 2000)
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
                <h1 style={{color:"blue"}}><u> Login </u></h1>
                <p style={{color:"Red"}}>Bad Creandials. Please input Correct Details !!!</p>
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

    export default LoginBad
  
   