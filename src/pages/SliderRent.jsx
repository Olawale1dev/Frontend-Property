import React, { Component } from "react";
//import { MenuItem } from "@mui/material";
//import React from "react";
//import  { useState  } from "react";
import './Slider.css'
import {Link} from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



 





class SliderRent extends Component  {

    
  
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
        <h1> Pleses wait some time.... </h1> </div> ;

    return ( 
       <div  class="sliderSell-second-lay">
            
                    <div ref="{property.id}"></div>{
                      items.map((property) =>(
                      <div key={property.id} >
                        <Link to={property.link} className="LinkTo">  
                          <div class="slider-third-lay">
                          
                              <div className= "propertyImag">
                              <img variant="top" className="propertyImge" src= {property.url} alt="propertyPicture"/>
                                <Card.Title className="slider-shortDetail">{property.title}</Card.Title>
                                <p className="slider-shortDetail"> {property.price}/Year</p>
                              </div>
                                <Card.Body>
                                  <Card.Text>   
                                    
                                    <div class="slider-Locatio">
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
            
            
       

        </div>
     



     
    
    ); 
  }
       
}  

export default SliderRent
    



