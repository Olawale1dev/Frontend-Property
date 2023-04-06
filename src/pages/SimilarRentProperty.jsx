import React, { Component } from "react";
//import { MenuItem } from "@mui/material";
//import React from "react";
//import  { useState  } from "react";
import './PropertyRen.css'
import {Link} from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import  './PropertyRent.css';
import bedroom from './Assets/bedroom.jpg';
import bathroom from './Assets/bathroom.jpg';
import toilet from './Assets/toilet.jpg'; 
import locationicon from './Assets/locationicon.png'; 


 





class SimilarRentProperty extends Component  {

    
  
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
    fetch("http://localhost:2020/property/purpose/For-Rent?size=5")
        .then((res) => res.json())
        .then((json) => {
          for(let i=0;i<json.content.length;  i++){
            json.content[i]['link']="/property/"+json.content[i]['id']+"/"+json.content[i]['title'];
          }
            this.setState({
                items: json.content,
                DataisLoaded: true
            });
        })
  }

 


    
   
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;

    return ( 
     
      <div  class="property-second-lay">
            
                    <div ref="{property.id}"></div>{
                      items.map((property) =>(
                      <div key={property.id} >
                        <Link to={property.link} className="LinkTo">
                        
                          
                        
                          <div class="property-third-lay">
                          
                              <div className= "propertyImage">
                              <img variant="top" className="propertyImg" src={`http://localhost:3000/${property.url}`} alt="propertyPicture"/>
                              </div>
                          <Card.Body>
                          <Card.Title >{property.title}</Card.Title>
                          <p> {property.price}/{property.priceUnit}</p>
                          <Card.Text> 
                          <div className="Location">
                            <img  className="LocationiconImage" src={locationicon} alt="locationicon" ></img>
                            <Card.Title>{property.area}</Card.Title>  
                          </div>   

                            <div className="icons">
                                    <div className="row">
                                        <div className="column">
                                        <img  className="iconImage" src={bedroom} alt="bedroom" ></img>
                                        <p className="ParaNo">{property.bedroomNo} bedrooms</p>
                                        <img className="iconImage"  src={bathroom} alt="bedroom" ></img>
                                        <p className="ParaNo"> {property.bathroomNo} bathrooms</p>
                                        <img className="iconImage" src={toilet} alt="bedroom" ></img>
                                        <p className="ParaNo"> {property.toiletNo} toilets</p>
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

export default SimilarRentProperty 
    



