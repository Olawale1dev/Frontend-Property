import React, { Component } from "react";
//import { MenuItem } from "@mui/material";
//import React from "react";
//import  { useState  } from "react";
import './My.css'
import bedroom from './Assets/bedroom.jpg';
import bathroom from './Assets/bathroom.jpg';
import toilet from './Assets/toilet.jpg';
import DownSide from './DownSide';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Await } from "react-router-dom";

class  AllPost extends Component {

    state = {
        properties: []
    }
    
    componentDidMount = () => {
    
        fetch('http://localhost:2020/property/purpose/For-Rent')
      .then(response => response.json())
      .then(data => {
          const properties = data.results;
          Await.all(properties.map(property => fetch(
            `http://localhost:2020/property/${property.id}`
          )))
          .then(resp => Promise.all( resp.map(r => r.json()) ))
          .then(result => {
            const properties = result.map((data, i) => {
              const property = Object.assign(properties[i], {
                genres: data.genres,
                homepage: data.homepage
              });
              return property;
            });
            this.setState({
              properties
            });
          });
      })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait for some time.... </h1> </div> ;
    
        return ( 
          
          <div class="property-first-layer">
            
            <div class="headlink">
            <a className="" href="http://localhost:3000/">Home</a>/
                <a href="http://localhost:3000/ForRent">For Rent</a>/
                <a href="http://localhost:3000/ForSell">For Sell</a>/
                <a href="http://localhost:3000/ShortLet">Short Let</a>/
                <a href="http://localhost:3000/Blog">Blog</a>/
            </div>
    
            <div class="columnside">    
              <ol>
                       <h3> Safety Tips </h3>
                <li>1. Do not make any upfront payment as inspection fee before seeing the property or seeing the agent you contacted physically.</li>
                <li>2. When you find a property of your interest, make sure to do an appropriate finding of whom the rent and other fees are to be paid to.</li>
                <li>3. All meetings with agents should be done in open locations.</li>
                <li>4. The agent is not a representative from ProProperty.com.ng neither does ProProperty.com.ng control the affairs of the agent as both parties are different entities.</li>
                <li>5. The contact agent on properties listed on PropertyPro.ng does not represent PropertyPro.ng. PropertyPro.ng will not mandate agents to ask for fees upfront.</li>
              </ol>
    
            </div>
            
            <div class="property-second-layer">
                <h1> Property For Rent</h1>
                <div ref="{property.id}"></div>{
              items.map((property) =>(
                  <div key={property.id} >
                    <button onClick="handleClick"> Read More</button>
                    
                      <div class="head">
                      
                        
                        
                      </div>
                      
                      <div class="property-third-layer">
                      
                          <div >
                          <Card.Img variant="top" class="img" src="<c:url value='{property.url}'/>" alt="propertyPicture"/>
                          </div>
                      <Card.Body>
                      <Card.Title >{property.title}</Card.Title>
                       <p> {property.price}/Year</p>
                      <Card.Text>
                      
                     
                          <button> <a href="http://localhost:2020/property/purpose/{property.id} " onClick={property.id}>Read more</a> </button>
                            <div className="icons">
                                <div className="row">
                                    <div className="column">
                                    <img  src={bedroom} alt="bedroom" ></img>
                                    <p className="ParaNo">{property.bedroomNo} bedrooms</p>
                                    </div>
                                
                                    <div className="column" >
                                    <img  src={bathroom} alt="bedroom" ></img>
                                    <p className="ParaNo"> {property.bathroomNo} bathrooms</p>
                                    </div>
    
                                    <div className="column">
                                    <img  src={toilet} alt="bedroom" ></img>
                                    <p className="ParaNo"> {property.toiletNo} toilets</p>
                                    <div>
                                    
                                  </div>
                                </div>
                            </div>
                            
                              </div >
                                  <div className="detailSection">
                                    <p >Size: {property.size}</p>
                                    <p>Purpose: {property.purpose}</p>
                                    <p>Type Of Property: {property.type}</p>
                                    <p>Sub Type Of Property: {property.subType}</p>
                                    <p>Status: {property.status}</p>
                                  </div>
                              <div class="columnside">    
                                <ol>
                                        <h3> Safety Tips </h3>
                                  <li>1. Do not make any upfront payment as inspection fee before seeing the property or seeing the agent you contacted physically.</li>
                                  <li>2. When you find a property of your interest, make sure to do an appropriate finding of whom the rent and other fees are to be paid to.</li>
                                  <li>3. All meetings with agents should be done in open locations.</li>
                                  <li>4. The agent is not a representative from ProProperty.com.ng neither does ProProperty.com.ng control the affairs of the agent as both parties are different entities.</li>
                                  <li>5. The contact agent on properties listed on PropertyPro.ng does not represent PropertyPro.ng. PropertyPro.ng will not mandate agents to ask for fees upfront.</li>
                                </ol>
    
                              </div>
                              <div class=" WhatsApp">
                              <p> WhatsApp:{property.agentNumber}</p>
                              </div>
                              <div class="Location">
                            <p>State: {property.state}</p>
                            <p>Locality: {property.locality}</p>
                            <p>Area: {property.area}</p>
                            <p>Street/Estate/Neighbourhood: {property.street}</p>
                            </div>
                            <p className="Description"> Description: {property.description}</p>
                            <div class="YoutubeDiv">
                            
                            <iframe id="YoutubeDiv" className="myclass" width="420" height="315"
                                src="https://www.youtube.com/embed/{property.url}"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                youtubeLink: property.youtubeLink</iframe>
                            </div>
                          </Card.Text>
                        </Card.Body>   
                      </div>
                      
                  </div>
    
                     
           
              ))  
            }
    
           
    
            </div>
            <DownSide/>
          </div>
    
    
    
         
        
        ); 
      }

}
export default AllPost 