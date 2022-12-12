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
    const [signUpAs, setSignUpAs] = useState('')

    const handleChange = (event) => {
      setSignUpAs(event.target.value);
    };

    
   
    
    
    
   
    

    return(
      
        <div>
          <Header/>
            <div className="PostPropertyBackground">
            
              <Container  className="min-h-screen flex flex-col text-black ">
              
              <Box 
              action="http://localhost:2020/api/v1/registration" object="User" method="POST"
                component="form" encType="multipart/form-data"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
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
                    name="signUpAs" focused 
                    value={signUpAs}
                    onChange= {handleChange}color="secondary">
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10} className="OptionSignUpAs">User</MenuItem>
                        <MenuItem value={11} className="OptionSignUpAs">Agent</MenuItem>
                        <MenuItem value={12}className="OptionSignUpAs">Landlord</MenuItem>
                    </Select>
                    </FormControl>
                    <br></br>

                  <TextField type="password" label="Password" color="secondary" name="password" focused 
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                
                required /><br></br>
                <Button style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px"}}type="submit">SAVE</Button>
                </Box>
                
              </Container>
              
          </div>
        </div>
          
       
        

       

      

        

        
    
      
      

    );


}
 
