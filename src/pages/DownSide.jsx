//import React, { Component } from "react";
import * as React from "react";
import   './My.css';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';

//import { MenuItem } from "@mui/material";
//import React from "react";
//import  { useState  } from "react";
import './PropertyRen.css'

//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import  './PropertyRent.css';


 





export default function DownSide(){

    const [anchorel, setAnchorel] = React.useState(null);
    const open = Boolean(anchorel);
    const handleClick = (event) => {
      setAnchorel(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorel(null);
    };
  
      return(
        <div>
            <div className="header">
                    <div>
                        <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        >
                        
                        
                        </Button>
                        <a href="http://localhost:3000" className="logo">MyProperty.com.ng</a>
                        <div className="header-right"
                            id="fade-menu"
                            
                            anchorel={anchorel}
                            open={open}
                            onClose={handleClose}
                            transitioncomponent={Fade}>
                            <a className="" href="http://localhost:3000/">Home</a>
                            <a href="http://localhost:3000/ForRent">For Rent</a>
                            <a href="http://localhost:3000/ForSell">For Sell</a>
                            <a href="http://localhost:3000/ShortLet">Short Let</a>
                            <a href="http://localhost:3000/Blog">Blog</a>
                            <a href="http://localhost:3000/Contact">Contact</a>
                            <a href="http://localhost:3000/About">About</a>
                        </div>
                    </div>
                    
                </div>
                <div className="footer-area">
                        <div className="container-area">
                            <div className="row-pdb-100">
                                <div className="col-md-2">
                                    <div footer-text="true">
                                        <h3>Purpose</h3>
                                        <ul>
                                            <li><a href="#" className="ListItems">For Rent</a></li>
                                            <li><a href="#" className="ListItems">For Sell</a></li>
                                            <li><a href="#" className="ListItems">Short Let</a></li>
                                        </ul>

                                    </div>

                                </div>
                                <div className="col-md-2">
                                    <div footer-text="true">
                                        <h3>Status</h3>
                                        <ul>
                                            <li><a href="#" className="ListItems">Furnished</a></li>
                                            <li><a href="#" className="ListItems">Serviced</a></li>
                                            <li><a href="#" className="ListItems">Newly Built</a></li>
                                        </ul>

                                    </div>

                                </div>
                                <div className="col-md-2">
                                    <div footer-text="true">
                                        <h3>Type</h3>
                                        <ul>
                                            <li><a href="#" className="ListItems">Boys Quarters</a></li>
                                            <li><a href="#" className="ListItems">Mini-Flat</a></li>
                                            <li><a href="#" className="ListItems">Self Contain</a></li>
                                            <li><a href="#" className="ListItems">Shared Apartment</a></li>
                                            <li><a href="#" className="ListItems">Studio Apartment</a></li>
                                        </ul>

                                    </div>

                                </div>
                                <div className="col-md-2">
                                    <div footer-text="true">
                                        <h3 className="Itemtitle">Popula States</h3>
                                        <ul >
                                            <li ><a href="#" className="ListItems">Lagos</a></li>
                                            <li><a href="#" className="ListItems">Ogun</a></li>
                                            <li><a href="#" className="ListItems">Oyo</a></li>
                                            <li><a href="#" className="ListItems">Rivers</a></li>
                                            <li><a href="#" className="ListItems">Abuja</a></li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="BuiltBy">
                    <Card.Title> Built By Tiamiyu Sodiq Olawale |MyProperty.com.ng  &copy; 2022</Card.Title>
                    </div>
                    
          </div>
    ); 
         
}  

    



