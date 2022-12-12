import React, { Component } from "react";
//import { MenuItem } from "@mui/material";
//import React from "react";
//import  { useState  } from "react";
import './PropertyRen.css'
import {Link} from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import  './PropertyRent.css';


 





class PropertySel extends Component  {

    
  
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
    fetch("http://localhost:2020/property/top1/Sell/For-Sell")
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
        <h1> Pleses wait some time.... </h1> </div> ;

    return ( 
       <div  class="property-second-lay">
            <picture >
                    <div ref="{property.id}"></div>{
                      items.map((property) =>(
                      <div key={property.id} >
                       <Link to={property.link} className="LinkTo">
                          <div class="property-third-lay">
                          
                              <div className= "propertyImage">
                              <img variant="top" className="propertyImg"src={property.url} alt="propertyPicture"/>
                              </div>
                          <Card.Body>
                          <Card.Title >{property.title}</Card.Title>
                          <p> {property.price}/Year</p>
                          <Card.Text>   
                                 
                            <div class="Locatio">
                                <p>State: {property.state}</p>
                                <p>Area: {property.area}</p>  
                            </div>
                              </Card.Text>
                            </Card.Body> 
                             
                          </div>
                          </Link>   
                      </div>

                        
              
                  ))  
                }
            
            </picture>
       

        </div>
     



     
    
    ); 
  }
       
}  

export default PropertySel
    



