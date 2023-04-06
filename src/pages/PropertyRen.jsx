import React, { Component } from "react";
//import { MenuItem } from "@mui/material";
//import React from "react";
//import  { useState  } from "react";
import './PropertyRen.css'
import {Link} from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bedroom from './Assets/bedroom.jpg';
import bathroom from './Assets/bathroom.jpg';
import toilet from './Assets/toilet.jpg';
import locationicon from './Assets/locationicon.png';  
//import  './PropertyRent.css';


 





class PropertyRen extends Component  {

    
  
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch("http://localhost:2020/property/top1/For-Rent")
        .then((res) => res.json())
        .then((json) => {
          for(let i=0;i<json.length;  i++){
            json[i]['link']="/Property/"+json[i]['id']+"/"+json[i]['title'];
          }
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
  }

 


    
   
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait for some time.... </h1> </div> ;

    return ( 
       <div  className="property-second-lay">
            
                    <div useref="{property.id}"></div>{
                      items.map((property) =>(
                      <div key={property.id} >
                        <Link to={property.link} className="LinkTo">
                        
                          <div className="">
                          
                              <div className= "propertyImage">
                              <img variant="top" className="propertyImg" src= {property.url} alt="propertyPicture"/>
                              </div>
                          <Card.Body>
                          <Card.Title >{property.title}</Card.Title>
                          <Card.Title> {property.price}/{property.priceUnit}</Card.Title>
                          <Card.Text> 
                          <div className="Location">
                            <img  className="LocationiconImage" src={locationicon} alt="locationicon" ></img>
                                <Card.Title>{property.area}</Card.Title>  
                          </div>   
                          <div className="icons">
                                    <div className="row">
                                        <div className="column">
                                        <img  className="iconImage" src={bedroom} alt="bedroom" ></img>
                                        <div className="ParaNo">{property.bedroomNo} bedrooms</div>
                                        <img className="iconImage"  src={bathroom} alt="bedroom" ></img>
                                        <div className="ParaNo"> {property.bathroomNo} bathrooms</div>
                                        <img className="iconImage" src={toilet} alt="bedroom" ></img>
                                        <div className="ParaNo"> {property.toiletNo} toilets</div>
                                        </div>
                                    </div>
                          </div > 
                            
                              </Card.Text>
                            </Card.Body> 
                             
                          </div>
                          </Link>
                      </div>
                    
              
                  ))  
                }
            
            
       
         
        </div>
       
                        



     
    
    ); 
  }
       
}  

export default PropertyRen 
    



