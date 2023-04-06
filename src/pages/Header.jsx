import * as React from 'react';
import {Button, IconButton, Toolbar } from '@mui/material';
import  './Header.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
//import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';


import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
    
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const handleLogout = async () => {
  let res = await
  fetch("http://localhost:3000/login");
  let resJson = await res.json();
  //.then((res)=> res.json())
  //.then((resJson) => {
    console.log(resJson)
  if(resJson.status ===200){
    alert("You Have Logged Out Successfully")
    setTimeout(function(){window.location.replace("http://localhost:3000");}, 2000)
  }else{
    alert("Not Successfull")
  }
//})
}




export default function Header() {
  const [anchorel, setAnchorel] = React.useState(null);
  const open = Boolean(anchorel);
  const handleClick = (event) => {
    setAnchorel(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorel(null);
  };

 
 

  return (
      

    <div>
      
          <div
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <ThemeProvider theme={darkTheme}>
                  <AppBar position="static" color="primary" enableColorOnDark>
                  {appBarLabel('enableColorOnDark')}
                  </AppBar>
          
              </ThemeProvider>
          </Stack>
           
          </div>
        
     
      <Menu
        id="fade-menu"
        menulistprops={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorel}
        open={open}
        onClose={handleClose}
        transitioncomponent={Fade}
      >
        <MenuItem onClick={handleClose}><a href="http://localhost:3000" className="Listheader">Home</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/ForRent" className="Listheader">For Rent</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/ForSell" className="Listheader">For Sell</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/ShortLet" className="Listheader">Short Let</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/PostProperty" className="Listheader">Post Property</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/blogpost" className="Listheader">Post Blog</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/signup" className="Listheader">Sign up</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/login" className="Listheader">Login</a></MenuItem>
        <MenuItem onClick={handleLogout} className="Listheader">Log out</MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/login" className="Listheader">Blog</a></MenuItem>
       
        
      </Menu>
        

    </div>

    
  );
}

