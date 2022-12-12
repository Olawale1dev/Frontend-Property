import React, { Component } from "react";
import { MenuItem } from "@mui/material";
import {Container} from '@mui/material';
import Box from '@mui/material/Box';
//import React from "react";
//import  { useState  } from "react";
import './My.css'
import bedroom from './Assets/bedroom.jpg';
import bathroom from './Assets/bathroom.jpg';
import toilet from './Assets/toilet.jpg'; 
import DownSide from './DownSide';
//import {faList, faSearch, faTimes,faStepBackward, faStepForward,faFastBackward, faFastForward} from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import {Card,  Button, FormControl} from 'react-bootstrap';
//import { Input, TextField } from "@mui/material";
//import axios from 'axios;'


 





class Search extends Component  {

    
  
  constructor(props) {
    super(props);

   // const {items, currentPage, itemsPerPage} = this.state;
    this.state = {
        items: [],
        currentPage : 0,
        lastPage : 0,
        search:'',
        bedroomNo:'',
        type:'',
        itemsPerPage: 5,
        DataisLoaded: false
    };
  }

  componentDidMount() {
      this.findAllProperty(this.state.currentPage);
      //this.findFirstPage(this.state.currentPage);
      //this.findPrevPage(this.state.currentPage);
      //this.findLastPage(this.state.lastPage);
     // this.searchDataPrev(this.state.currentPage)
    }
  

  // ComponentDidMount is used to
  // execute the code 
  findAllProperty(currentPage) {
      currentPage -=1;
    fetch("http://localhost:2020/property/find-all?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
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
        });
      
  };

  findFirstPage(currentPage){
    currentPage -=1;
    
    fetch("http://localhost:2020/property/find-all?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json.content,
                totalPages: json.totalPages,
                numberOfElements: json.numberOfElements,
                totalElements: json.totalElements,
                currentPage : 1 ,
                DataisLoaded: true
            });
        });
  };

  findPrevPage(currentPage){
    let prevPage = 1;
    let currentMinusPrevPage = this.state.currentPage - prevPage 
    if(this.state.currentPage > prevPage){
    fetch("http://localhost:2020/property/find-all?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json.content,
                totalPages: json.totalPages,
                numberOfElements: json.numberOfElements,
                totalElements: json.totalElements,
                //currentPage: json.number=1,
                currentPage : currentMinusPrevPage ,
                DataisLoaded: true
            });
        });
      }
  
  };

  findLastPage(){
   let condition = Math.ceil(this.state.totalElements / this.state.itemsPerPage) ;
   if(this.state.currentPage < condition ){
    fetch("http://localhost:2020/property/find-all?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json.content,
                totalPages: json.totalPages,
                numberOfElements: json.numberOfElements,
                totalElements: json.totalElements,
                //currentPage: json.number=1,
                //condition : Math.ceil(this.state.totalElements / this.state.itemsPerPage) ,
                condition: this.state.currentPage < condition ,
                currentPage: condition,
                DataisLoaded: true
            });
        });
      }else{
        this.findAllProperty();
      }
      
  };

  changePage = (event) => {
    let targetPage = parseInt(event.target.value) 
    if (this.state.search){
      this.searchData(targetPage)
    }else{
      this.findAllProperty(targetPage)
    }
    this.setState({
      [event.target.name] : targetPage
    }); 
  };

  firstPage = () => {
    let firstPage = 1;
    if(this.state.currentPage > firstPage){
      if (this.state.search){
        this.searchDataFirst(firstPage);
      }else{
      this.findFirstPage(1);
    }
  }
  };

  prevPage = () => {
    let prevPage = 1;
    let currentMinusPrevPage = this.state.currentPage - prevPage 
    if(this.state.currentPage > prevPage){
      if (this.state.search){
        this.searchDataPrev(currentMinusPrevPage);
      }else{
      this.findPrevPage(this.state.currentPage - prevPage);
    }
  }
  };

  lastPage = () => {
    let condition = Math.ceil(this.state.totalElements / this.state.itemsPerPage)
    //let condition2 = condition
    if(this.state.currentPage < condition ){
      if (this.state.search){
        this.searchDataLast(condition)
      }else{
      this.findLastPage(condition);
    }
  }
  };

  nextPage = () => {
    let currentPagePlus1 = this.state.currentPage + 1
    if(this.state.currentPage < Math.ceil(this.state.totalElements / this.state.itemsPerPage) ){
      if (this.state.search){
        //if(this.state.currentPage === 1)
        //this.findAllProperty(currentPagePlus1)
        this.searchData(currentPagePlus1)
      }else{
      this.findAllProperty(currentPagePlus1)
    }
  }
  };

  typeChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });

  }; 
  bedroomChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  cancelSearch = () => {
  this.setState({bedroomNo: ''});
  this.setState({type: ''});
  this.findAllProperty(this.currentPage);
  };
  searchData = (currentPage) => {
    currentPage -=1;
    fetch("http://localhost:2020/property/search?query="+this.state.bedroomNo+"&subType="+this.state.type+"&page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json.content,
                totalPages: json.totalPages,
                totalElements: json.totalElements,
                currentPage : json.number +1,
                PropertyLoaded: true
            });
        });  
  };

  searchDataPrev = (currentPage) => {
    currentPage =1;
    let prevPage = 1;
    let currentMinusPrevPage = this.state.currentPage - prevPage 
    if(this.state.currentPage > prevPage){
    fetch("http://localhost:2020/property/search?query="+this.state.bedroomNo+"&subType="+this.state.type+"&page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json.content,
                totalPages: json.totalPages,
                totalElements: json.totalElements,
                currentPage : currentMinusPrevPage,
                PropertyLoaded: true
            });
        }); 
      } 
  };

  searchDataFirst = (currentPage) => {
    currentPage =1;
    fetch("http://localhost:2020/property/search?query="+this.state.bedroomNo+"&subType="+this.state.type+"&page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json.content,
                totalPages: json.totalPages,
                totalElements: json.totalElements,
                currentPage : 1,
                PropertyLoaded: true
            });
        });  
  };

  searchDataLast = (currentPage) => {
    currentPage =1;
    let condition = Math.ceil(this.state.totalElements / this.state.itemsPerPage) ;
    if(this.state.currentPage < condition ){
    fetch("http://localhost:2020/property/search?query="+this.state.bedroomNo+"&subType="+this.state.type+"&page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json.content,
                totalPages: json.totalPages,
                totalElements: json.totalElements,
                condition: this.state.currentPage < condition ,
                currentPage: condition,
                PropertyLoaded: true
            });
        });
      }  
  };
   
  render() {
    const {items, currentPage, totalPages,  DataisLoaded ,bedroomNo, type} = this.state;
    
    //const lastIndex = currentPage * itemsPerPage ;
    //const firstIndex = currentPage - itemsPerPage;
    //const currentItems = items.slice(firstIndex, lastIndex);

   // const totalPages = Math.ceil(totalElements / itemsPerPage);
   /*   <div>
            <FontAwesomeIcon  icon={faList}/> Property List
        </div>*/
    
    if (!DataisLoaded) return 
     <div>
        <h1> Pleses wait some time.... </h1> 
      </div> ;
      if (items == null) return 
      <div>
         <h1> No property for your search input.... </h1> 
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
        
        <div size="sm" className="searchSection">
            <p>Search By Bedroom Number</p>
            <FormControl  placeholder="Search By Bedroom Number" value={bedroomNo} name="bedroomNo" id={"info-border  text-black"}
            onChange={this.bedroomChange} className="searchForm" style={{width: "70%"}}/>
            <p>Search By Type of Property</p>
             <FormControl  placeholder="e.g: mini-flat" value={type} name="type" id={"info-border  text-black"}
            onChange={this.typeChange} className="searchForm" style={{width: "70%"}}/>

            <div>
              <button  type="button" onClick={this.searchData} style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px"}}>Search
                  
              </button>
              <button type="button" onClick={this.cancelSearch} style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px", margin: "5px"}}>cancel
                   
              </button>
            </div>
        </div>
        <Container>
                <Box>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Bedrooms</InputLabel>
                            <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            className="OptionBedroomNo"
                            autoWidth
                            
                            name="bedroomNo" focused 
                            value={bedroomNo}
                            onChange= {this.bedroomChange} color="secondary">
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value="1" className="OptionBedroomNo">1</MenuItem>
                                <MenuItem value="2" className="OptionBedroomNo">2</MenuItem>
                                <MenuItem value="3"className="OptionBedroomNo">3</MenuItem>
                                <MenuItem value="4"className="OptionBedroomNo">4</MenuItem>
                                <MenuItem value="5"className="OptionBedroomNo">5</MenuItem>
                                <MenuItem value="6"className="OptionBedroomNo">6</MenuItem>
                                <MenuItem value="7"className="OptionBedroomNo">7</MenuItem>
                                <MenuItem value="8"className="OptionBedroomNo">8</MenuItem>
                                <MenuItem value="9"className="OptionBedroomNo">9</MenuItem>
                                <MenuItem value="10+"className="OptionBedroomNo">10+</MenuItem>
                                
                            </Select>
                            </FormControl>
                </Box>
        </Container>
        
        <div  class="property-second-layer">
        
                    <h1> Properties</h1>
            
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
                          <Card.Title>{property.title}</Card.Title>
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
                    <Button disabled={currentPage === 1 ? true : false }
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

export default Search
    



