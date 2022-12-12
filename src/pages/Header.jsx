import * as React from 'react';
import Button from '@mui/material/Button';
import  './Header.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';


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
      
          <Button
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
           
          </Button>
        
     
      <Menu
        id="fade-menu"
        menulistprops={{
          'aria-labelledby': 'fade-button',
        }}
        anchorel={anchorel}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><a href="http://localhost:3000" className="Listheader">Home</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/ForRent" className="Listheader">For Rent</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/ForSell" className="Listheader">For Sell</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/ShortLet" className="Listheader">Short Let</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/PostProperty" className="Listheader">Post Property</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/blogpost" className="Listheader">Post Blog</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/signup" className="Listheader">Sign up</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/login" className="Listheader">Login</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/login" className="Listheader">Blog</a></MenuItem>
       
        
      </Menu>
        

    </div>

    
  );
}

