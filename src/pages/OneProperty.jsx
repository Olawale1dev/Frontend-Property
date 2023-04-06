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
import {useParams, useSearchParams} from 'react-router-dom';
import SimilarRent from "./SimilarRent";
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

class OneProperty extends Component  {
 
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
      <div className="property-first-layer">
        
        
      <div className="headlink">
      <a className="" href="http://localhost:3000/">Home</a>|
          <a href="http://localhost:3000/ForRent">For Rent</a>|
          <a href="http://localhost:3000/ForSell">For Sell</a>|
          <a href="http://localhost:3000/ShortLet">Short Let</a>|
          <a href="http://localhost:3000/Furnished">Furnished</a>|
          <a href="http://localhost:3000/Serviced">Serviced</a>|
          <a href="http://localhost:3000/NewlyBuilt/">Newly Built</a>|
          <a href="http://localhost:3000/Blog">Blog</a>|
          
      </div>
          
      <div className="columnside">    
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
        <div  >
                      
                  <div useref="{property.id}"></div>{
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
                      
                        
                        <div  className="innerProperty">
                        
                            <div className= "propertyImage">
                            <img variant="top" className="propertyImg" src={`http://localhost:3000/${property.url}`} alt="propertyPicture"/>
                            
                            </div>
                        <Card.Body >
                        <Card.Title>{property.title}</Card.Title>
                        <div> {property.price}/{property.priceUnit}</div>
                        <Card.Text>
                          
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
                                      <div >Size: {property.size}</div>
                                      <div>Purpose: {property.purpose}</div>
                                      <div>Type Of Property: {property.type}</div>
                                      <div>Sub Type Of Property: {property.subType}</div>
                                      <div>Status: {property.status}</div>
                                    </div>
                                
                                <div className="columnside">    
                                  <ol>
                                          <h3> Safety Tips </h3>
                                    <li>1. Do not make any upfront payment as inspection fee before seeing the property or seeing the agent you contacted physically.</li>
                                    <li>2. When you find a property of your interest, make sure to do an appropriate finding of whom the rent and other fees are to be paid to.</li>
                                    <li>3. All meetings with agents should be done in open locations.</li>
                                    <li>4. The agent is not a representative from ProProperty.com.ng neither does ProProperty.com.ng control the affairs of the agent as both parties are different entities.</li>
                                    <li>5. The contact agent on properties listed on PropertyPro.ng does not represent PropertyPro.ng. PropertyPro.ng will not mandate agents to ask for fees upfront.</li>
                                  </ol>

                                </div>
                                <div className=" WhatsApp">
                                <a
                                  href={`https://wa.me/${property.agentNumber}`}
                                    
                                    
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  ><div className="whatslink">WhatsApp:{property.agentNumber}</div>
                                    
                                  </a>
                                
                                </div>
                                <div className="Location">
                                  <div>State: {property.state}</div>
                                  <div>Locality: {property.locality}</div>
                                  <div>Area: {property.area}</div>
                                  <div>Street/Estate/Neighbourhood: {property.street}</div>
                                  </div>
                                  <div className="Description"> Description: {property.description}</div>
                                  <div className="YoutubeDiv">
                                   
                                  
                                  <iframe id="YoutubeDiv" className="myclass" width="420" height="315"
                                      src={`https://www.youtube.com/embed/${property.youtubeLink}`}  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
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
          <div>Advertise with us</div>
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

export default (props)=> (<OneProperty {...props} params={useParams()}/>);
    



