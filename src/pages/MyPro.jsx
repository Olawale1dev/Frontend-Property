import * as React from "react";
import   './My.css';
import Button from '@mui/material/Button';
//import Fade from '@mui/material/Fade';
import  './Header.css';

//import { ThemeProvider, createTheme } from '@mui/material/styles';










export default function MyPro(){

  const [anchorel, setAnchorel] = React.useState(null);
  const open = Boolean(anchorel);
  const handleClick = (event) => {
    setAnchorel(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorel(null);
  };

    return(
      
       <div className="header">
                    <div>
                        <div
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        >
                        
                        
                        </div>
                        <a href="http://localhost:3000" className="logo">MyProperty.com.ng</a>
                        <div className="header-right"
                            id="fade-menu"
                            //menuListProps={{
                              //'aria-labelledby': 'fade-button',
                              //}}
                            anchorel={anchorel}
                            open={open}
                            onClose={handleClose}
                            //TransitionComponent={Fade}
                            >
                            <a className="" href="http://localhost:3000/">Home</a>
                            <a href="http://localhost:3000/Blog">Blog</a>
                            <a href="http://localhost:3000/Contact">Contact</a>
                            <a href="http://localhost:3000/About">About</a>
                        </div>
                    </div>
      </div>
      
    );


}
 
