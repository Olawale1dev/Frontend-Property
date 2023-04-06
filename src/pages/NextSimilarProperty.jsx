import React, { Component, useEffect } from "react";
//import { MenuItem } from "@mui/material";
//import React from "react";
//import  { useState  } from "react";
import './PropertyRen.css'
import bedroom from './Assets/bedroom.jpg';
import bathroom from './Assets/bathroom.jpg';
import toilet from './Assets/toilet.jpg'; 
import DownSide from './DownSide';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useParams} from 'react-router-dom';
import SimilarRent from "./SimilarRent";
import SimilarRentProperty from "./SimilarRentProperty";
import {FacebookShareCount, 
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton, 
  WhatsappIcon,TwitterShareButton, TwitterIcon,
  LinkedinShareButton,LinkedinIcon,
  TelegramShareButton,TelegramIcon,
  InstapaperShareButton,InstapaperIcon, 
  TumblrIcon,TumblrShareButton
  } from "react-share";
//import axios from 'axios'
//import useFetch from './UseFetch';
//import ForRent from './ForRent';

//import  './PropertyRent.css';


 




//const {fromNotification} = this.props.match.location.state

class NextSimilarProperty extends Component  {
 
  constructor(props) {
    super(props);

    //const {id} = this.useParams();
    this.state = {
        items: [],
       id: this.props.params.id
    };
  }

 componentDidMount (){
  console.log("http://localhost:2020/property/one/"+ this.state.id)
    fetch("http://localhost:2020/property/one/"+ this.state.id)
    .then((res) => res.json())
    .then((json)=>{
      this.setState({
        items:[json],
        DataisLoaded: true
        
      });
    });
   
} 
  //const {id} = useParams();
  //const history = unstable_HistoryRouter();
    
  //const {items: property}cons = useFetch("http://localhost:2020/property/one/"+ id) 
  render() {
    const {items} = this.state
    const shareUrl= window.location.href
  // ComponentDidMount is used to
  // execute the code 
 

 


  
  
  
    
    
   
    

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
      <div className="ContainerSection">
          
      
      <div className="PropertySection">
        <div  class="">
                    
                  <div ref="{property.id}"></div>{
                   items.map((property) =>(
                    <div key={property.id} 
                     >
                     
                      <br></br>
                      
                      <FacebookShareButton url={shareUrl} description={property.title} >
                        <FacebookIcon size={40} round={true} />
                      </FacebookShareButton>
                      <WhatsappShareButton url={shareUrl} description={property.title}>
                        <WhatsappIcon size={40} round={true} />
                      </WhatsappShareButton>
                      <TwitterShareButton url={shareUrl} description={property.title}>
                        <TwitterIcon size={40} round={true} />
                      </TwitterShareButton>
                      <LinkedinShareButton url={shareUrl} description={property.title}>
                        <LinkedinIcon size={40} round={true} />
                      </LinkedinShareButton>
                      <TelegramShareButton url={shareUrl} description={property.title}>
                        <TelegramIcon size={40} round={true} />
                      </TelegramShareButton>
                      <InstapaperShareButton url={shareUrl} description={property.title}>
                        <InstapaperIcon size={40} round={true} />
                      </InstapaperShareButton> 
                      <TumblrShareButton url={shareUrl} description={property.title}>
                        <TumblrIcon size={40} round={true} />
                      </TumblrShareButton> 
                        
                        
                        <div class="property-third-layer" className="innerProperty">
                        
                            <div className= "propertyImage">
                            <img variant="top" className="propertyImg" src={`http://localhost:3000/${property.url}`}alt="propertyPicture"/>
                            </div>
                        <Card.Body >
                        <Card.Title>{property.title}</Card.Title>
                        <p> {property.price}/{property.priceUnit}</p>
                        <Card.Text>
                          
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
                               
                                  <div className= "propertyImage">
                                    other Images
                                  <img variant="top" className="propertyImg" src={`http://localhost:3000/${property.image1}`} alt="propertyPicture"/>
                                  </div>
                                  <div className= "propertyImage">
                                  <img variant="top" className="propertyImg" src={`http://localhost:3000/${property.image2}`} alt="propertyPicture"/>
                                  </div>
                                  <div className= "propertyImage">
                                  <img variant="top" className="propertyImg" src={`http://localhost:3000/${property.image3}`} alt="propertyPicture"/>
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
                                  href={`https://wa.me/${property.agentNumber}`}
                                    
                                    
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
                                  
                                  <iframe id="YoutubeDiv" className="myclass" width="420" height="315"
                                      src={`https://www.youtube.com/embed/${property.youtubeLink}`}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                      youtubeLink: property.youtubeLink</iframe>
                                  
                                     
                              </div>
                              
                            </Card.Text>
                          </Card.Body> 
                           
                        </div>
                      
                    </div>

                      
            
                ))  
              }
          

     
            
      </div>
    
      
      
        </div>
        <div className="AdvertSection">
          <p>Advertise with us</p>
        </div>
      </div>
      <br></br>
      <SimilarRent/>
      <br></br>
      
      <DownSide/> 

    </div>
     



     
    
    ); 
  
   }     
}  

export default (props)=> (<NextSimilarProperty {...props} params={useParams()}/>);
    



