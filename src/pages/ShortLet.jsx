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
//import Card from 'react-bootstrap/Card';
import {Card,  Button} from 'react-bootstrap';
//import axios from 'axios;'


 





class ShortLet extends Component  {

    
  
  constructor(props) {
    super(props);

    //const {items, currentPage, itemsPerPage} = this.state;

    this.state = {
        items: [],
        currentPage : 0,
        itemsPerPage: 5,
        DataisLoaded: false
    };
  }

  componentDidMount() {
    this.findAllProperty(this.currentPage);
  }

  // ComponentDidMount is used to
  // execute the code 
  findAllProperty(currentPage) {
      currentPage -=1;
    fetch("http://localhost:2020/property/purpose/Short-Let?page=" +this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json.content,
                totalPages: json.totalPages,
                numberOfElements: json.numberOfElements,
                totalElements: json.totalElements,
                currentPage : json.number + 1,
                DataisLoaded: true
            });
        })
  }

  changePage = (event) => {
    this.setState({
      [event.target.name] : parseInt(event.target.value)
    });
    this.findAllProperty(event)
  };

  firstPage = (event) => {
    let firstPage = 1;
    if(this.state.currentPage > firstPage){
      this.setState({
        currentPage : 1
      });
    }
  };

  prevPage = () => {
    let prevPage = 1;
    if(this.state.currentPage > prevPage){
      this.setState({
        currentPage: this.state.currentPage - prevPage
      });
    }
  };

  lastPage = () => {
    let condition = Math.ceil(this.state.totalElements / this.state.itemsPerPage);
  if(this.state.currentPage < condition ){
      this.setState({
        currentPage: condition
      });
    }

  };

  nextPage = () => {
    if(this.state.currentPage < Math.ceil(this.state.totalElements / this.state.itemsPerPage) ){
      this.setState({
        currentPage: this.state.currentPage + 1
      });
    }

  };

    
   
  render() {
    const {items, currentPage, totalPages,  DataisLoaded} = this.state;
    //const lastIndex = currentPage * itemsPerPage ;
    //const firstIndex = currentPage - itemsPerPage;
    //const currentItems = items.slice(firstIndex, lastIndex);

   // const totalPages = Math.ceil(totalElements / itemsPerPage);
   
    
    if (!DataisLoaded) return 
     <div>
        <h1> Pleses wait for some time.... </h1> 
      </div> ;

    return ( 
      
      <div class="property-first-layer">
        
        
        <div class="headlink">
        <a className="" href="http://localhost:3000/">Home</a>|
            <a href="http://localhost:3000/ForRent">For Rent</a>|
            <a href="http://localhost:3000/ForSell">For Sell</a>|
            <a href="http://localhost:3000/ShortLet">Short Let</a>|
            <a href="http://localhost:3000/Furnished">Furnished</a>|
            <a href="http://localhost:3000/Serviced">Serviced</a>|
            <a href="http://localhost:3000/NewlyBuilt/">Newly Built</a>|
            <a href="http://localhost:3000/Blog">Blog</a>|
            
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
        
        <div  class="property-second-layer">
        
                    <h1>Short-Let Property</h1>
            
                    <div ref="{property.id}"></div>{
                     items.map((property) =>(
                      <div key={property.id} >
                        
                        
                          <div class="head">
                          </div>
                          
                          <div class="property-third-layer">
                          
                              <div className= "propertyImage">
                              <img variant="top" className="propertyImg" src={property.url}alt="propertyPicture"/>
                              </div>
                          <Card.Body>
                          <Card.Title >{property.title}</Card.Title>
                          <p> {property.price}/Year</p>
                          <Card.Text>
                          
                        
                            
                                <div className="icons">
                                    <div className="row">
                                        <div className="column">
                                        <img  className="iconImage" src={bedroom} alt="bedroom" ></img>
                                        <p className="ParaNo">{property.bedroomNo} bedrooms</p>
                                        </div>
                                    
                                        <div className="column" >
                                        <img className="iconImage"  src={bathroom} alt="bedroom" ></img>
                                        <p className="ParaNo"> {property.bathroomNo} bathrooms</p>
                                        </div>

                                        <div className="column">
                                        <img className="iconImage" src={toilet} alt="bedroom" ></img>
                                        <p className="ParaNo"> {property.toiletNo} toilets</p>
                                        <div>
                                        
                                      </div>
                                    </div>
                                </div>
                                
                                  </div >
                                  <details>
                                  <div className= "propertyImage">
                                      other Images
                                    <img variant="top" className="propertyImg" src= {property.image1} alt="propertyPicture"/>
                                    </div>
                                    <div className= "propertyImage">
                                    <img variant="top" className="propertyImg" src= {property.image2} alt="propertyPicture"/>
                                    </div>
                                    <div className= "propertyImage">
                                    <img variant="top" className="propertyImg" src= {property.image3} alt="propertyPicture"/>
                                    </div>
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
                                  <a
                                      href="https://wa.me/{property.agentNumber}"
                                      
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    ><p className="whatslink">WhatsApp:{property.agentNumber}</p>
                                      <i class="fa fa-whatsapp whatsapp-icon"></i>
                                    </a>
                                  
                                  </div>
                                  <div class="Location">
                                    <p>State: {property.state}</p>
                                    <p>Locality: {property.locality}</p>
                                    <p>Area: {property.area}</p>
                                    <p>Street/Estate/Neighbourhood: {property.street}</p>
                                    </div>
                                    <p className="Description"> Description: {property.description}</p>
                                    <div class="YoutubeDiv">
                                    <p>Click detail to check youtube video</p> 
                                    <details>
                                    <iframe id="YoutubeDiv" className="myclass" width="420" height="315"
                                        src="https://www.youtube.com/embed/{property.url}"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                        youtubeLink: property.youtubeLink</iframe>
                                    </details> 
                                       
                                </div>
                                </details> 
                              </Card.Text>
                            </Card.Body> 
                             
                          </div>
                        
                      </div>

                        
              
                  ))  
                }
            

       
              
        </div>
        
        {items.length >  0 ?
        <footer>
          
          <div  className="paginationLeft">
          Showing Page {currentPage} of {totalPages} 
          </div>
          <div  className="paginationRight">
          <div>
                <div className="">
                    <Button disabled={currentPage === 1 ? true : false}
                    onClick={this.firstPage} type="button" variant="outline-info"className="buttonRight">
                        First
                    </Button>
                    <Button disabled={currentPage === 1 ? true : false} 
                    onClick={this.prevPage} type="button" variant="outline-info" className="buttonRight">
                        Prev
                    </Button>
                    <div className="buttonRight"> 
                    <input type="number" className="pageNumCss"  name="currentPage" value={currentPage} 
                    onChange={this.changePage} />    
                    </div>
                    <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                    onClick={this.nextPage} className="buttonRight">
                        Next
                    </Button >
                    <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false} 
                    onClick={this.lastPage} className="buttonRight">
                        Last
                    </Button> 
                </div>
                
                
            </div>
              
          </div>

        </footer>: null 
        }
        <br></br>
        <DownSide/> 

      </div>



     
    
    ); 
  }
       
}  

export default ShortLet 
    



