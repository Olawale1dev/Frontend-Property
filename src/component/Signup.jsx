import * as React from "react";
import { useState} from 'react';
//import {Container} from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/ButtonBase';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Header from '../pages/Header';
import {Container} from '@mui/material'

import '../pages/My.css'




export default function MyPro(){

  

    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [password, setPassword] = useState('')
    const [genderTitle, setGenderTitle] = useState('')
    const [roles, setRoles] = useState('')
    const [locality, setLocality] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (event) => {
      setRoles(event.target.value);
    };

    
    const handleClick= async (e)=>{
      e.preventDefault()
     // const blog={title, tagName, description, publisher, url}
      //console.log(blog)
      try{
       //let post = {"firstName": firstName, "lastName": lastName, "email": email, "signUpAs":signUpAs, "state": state, "city": city, "locality": locality, "genderTitle":genderTitle,"password": password };
       let newpost = new FormData(document.getElementById("user-post-form"));
       //let convert= await newpost.Json();
      // console.log(newpost.getAll);
      let res = await
       fetch("http://localhost:2020/api/v1/registration", { method : "POST", object:"User",  headers: {"Accept": "Application/json" }, 
       body: newpost

     });
     let resJson = await res.json();
     console.log(resJson);
     if(   resJson.user !== null && typeof resJson.id === 'number' && resJson.id > 0 ){
       alert("Account created successfully");
       //setMessage("Post created successfully");
       setTimeout(function(){window.location.replace("http://localhost:3000/login");}, 2000)
       
     }else if(resJson.message ===  "email already taken"){
       alert( resJson.message )
       //setTimeout(function(){window.location.replace("http://localhost:3000/signup");}, 2000)
     }
     else if(resJson.message === '406 NOT_ACCEPTABLE' ){
      alert("Invalid Email Address. Please Input a Valid Email Address.")
      //setTimeout(function(){window.location.replace("http://localhost:3000/signup");}, 2000)
    }else if(resJson.message === '411 LENGTH_REQUIRED' ){
      alert("Password must contain at least one digit, one upper case letter, one lower case letter and one special symbol (“@#$%”)")
      //setTimeout(function(){window.location.replace("http://localhost:3000/signup");}, 2000)
    }
   }catch (err){
     console.log(err);
   }
   };
    
    
    
   
    

    return(
      
        <div>
         
            <div className="PostPropertyBackground">
            
              <Container  className="min-h-screen flex flex-col text-black ">
              
              <Box 
              //action="http://localhost:2020/api/v1/registration" object="User" method="POST"
                component="form" encType="multipart/form-data" 
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off" id="user-post-form"
              >
                  Already Have an Account ?
                <Button href="http://localhost:3000/login"  style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px"}}> Login</Button> 

                  <h1 style={{color:"blue"}}><u> Sgin Up </u></h1>
                <TextField  type="text" label="First Name" color="secondary" name="firstName"focused  
                value={firstName}
                onChange= {(e) => setFirstName(e.target.value)}
                required /><br></br>
                

                <TextField type="text" label="Last Name" color="secondary" name="lastName" focused  
                value={lastName}
                onChange= {(e) => setLastName(e.target.value)}
                required/><br></br>
                
                
                <TextField type="email" label="Email" color="secondary" name="email" focused 
                value={email}
                onChange= {(e) => setEmail(e.target.value)}
                required placeholder="e.g: abd@gmail.com"/><br></br>

                <TextField type="text" label="City" color="secondary" name="city" focused 
                value={city}
                onChange= {(e) => setCity(e.target.value)}
                
                required /><br></br>

                <TextField type="text" label="locality" color="secondary" name="locality" focused 
                value={locality}
                onChange= {(e) => setLocality(e.target.value)}
                
                required/><br></br>

                <TextField type="text" label="State" color="secondary" name="state" focused 
                value={state}
                onChange= {(e) => setState(e.target.value)}
                
                required/><br></br>

                <TextField type="text" label="Zip" color="secondary" name="zip" focused 
                value={zip}
                onChange= {(e) => setZip(e.target.value)}
                
                required /><br></br>

                <TextField type="text" label="Gender" color="secondary" name="genderTitle" focused 
                value={genderTitle}
                onChange= {(e) => setGenderTitle(e.target.value)}
                
                required placeholder="Male/Female"/><br></br>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">SignUp As</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className="OptionSignUpAs"
                    autoWidth
                    label="SignUp As"
                    name="role" focused 
                    value={roles}
                    onChange= {handleChange}color="secondary">
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value="USER" className="OptionSignUpAs">User</MenuItem>
                        <MenuItem value="AGENT" className="OptionSignUpAs">Agent</MenuItem>
                        <MenuItem value="ADMIN"className="OptionSignUpAs">Landlord</MenuItem>
                    </Select>
                    </FormControl>
                    <br></br>
                    <p style={{"color":"blue"}}>Password must contain at least one digit, one upper case letter, one lower case letter and one special symbol (“@#$%”)</p>
                  <TextField type="password" label="Password" color="secondary" name="password" focused 
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                
                required /><br></br>
                <Button style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px"}}type="submit" onClick={handleClick}>Submit</Button>
                </Box>
                
              </Container>
              
          </div>
        </div>
          
       
        

       

      

        

        
    
      
      

    );


}
 
