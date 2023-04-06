import React, { Component} from "react";
//import { MenuItem } from "@mui/material";
//import React from "react";
//import  { useEffect  } from "react";
import './My.css'
import bedroom from './Assets/bedroom.jpg';
import bathroom from './Assets/bathroom.jpg';
import toilet from './Assets/toilet.jpg';
import locationicon from './Assets/locationicon.png'; 
import DownSide from './DownSide';
//import {faList, faSearch, faTimes,faStepBackward, faStepForward,faFastBackward, faFastForward} from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import {Card,  Button} from 'react-bootstrap';
import { TextField } from "@mui/material";
import {Link} from 'react-router-dom';
//import axios from 'axios;'
//import OneProperty from './OneProperty';
//import PageContext from "./PageContext";


 





class UserProperty extends Component  {

    
  
  constructor(props) {
    super(props);

   
    this.state = {
        items: [],
        currentPage : 0,
        lastPage : 0,
        search:'',
        bedroomNo:'',
        type:'',
        area:'',
        price:'',
        onePage:'',
        data:'',
        itemsPerPage: 15,
        DataisLoaded: false
    };
  }

  componentDidMount() {
      this.findAllProperty(this.state.currentPage);
     // this.onePerPage(this.state);
     // this.onePage(this.state.onePage);
      //this.findPrevPage(this.state.currentPage);
      //this.findLastPage(this.state.lastPage);
     // this.searchDataPrev(this.state.currentPage)
    }
    
    
  // ComponentDidMount is used to
  // execute the code 
 
  findAllProperty(currentPage) {
      currentPage -=1;
    fetch("http://localhost:2020/property/purpose/For-Rent?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
            //let newJson = json;
            for(let i=0;i<json.content.length;  i++){
              json.content[i]['link']="/Property/"+json.content[i]['id']+"/"+json.content[i]['title'];
            }
            this.setState({
                items: json.content,
                totalPages: json.totalPages,
                numberOfElements: json.numberOfElements,
                totalElements: json.totalElements,
                currentPage : json.number + 1,
                DataisLoaded: true
            })
            
        });
         
  };

  findFirstPage(currentPage){
    currentPage -=1;
    
    fetch("http://localhost:2020/property/purpose/For-Rent?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
          for(let i=0;i<json.content.length;  i++){
            json.content[i]['link']="/Property/"+json.content[i]['id']+"/"+json.content[i]['title'];
          }
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
    fetch("http://localhost:2020/property/purpose/For-Rent?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
          for(let i=0;i<json.content.length;  i++){
            json.content[i]['link']="/Property/"+json.content[i]['id']+"/"+json.content[i]['title'];
          }
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

  

 onePageFirst = () => {
    fetch("http://localhost:2020/property/one/"+this.state.onePage)
    .then((res) => res.json())
    .then((json)=>{
      this.setState({
        items:[json],
        DataisLoaded: true
      });
    });
  };

 

  findLastPage(){
   let condition = Math.ceil(this.state.totalElements / this.state.itemsPerPage) ;
   if(this.state.currentPage < condition ){
    fetch("http://localhost:2020/property/purpose/For-Rent?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
          for(let i=0;i<json.content.length;  i++){
            json.content[i]['link']="/Property/"+json.content[i]['id']+"/"+json.content[i]['title'];
          }
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

  areaChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  priceChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
 
  onePage = (event)=> {
    if(this.state.onePage){
      this.onePageFirst(event.target.value)
    }else{
      this.findAllProperty();
    }
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  cancelSearch = () => {
  this.setState({bedroomNo: ''});
  this.setState({type: ''});
  this.setState({price: ''});
  this.setState({area: ''});
  this.findAllProperty(this.currentPage);
  };
  searchData = (currentPage) => {
    currentPage -=1;
    fetch("http://localhost:2020/property/search-prop?bedroomNo="+this.state.bedroomNo+"&price="+this.state.price+"&area="+this.state.area+"&subType="+this.state.type+"&page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
          for(let i=0;i<json.content.length;  i++){
            json.content[i]['link']="/Property/"+json.content[i]['id']+"/"+json.content[i]['title'];
          }
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
    fetch("http://localhost:2020/property/search-prop?bedroomNo="+this.state.bedroomNo+"&subType="+this.state.type+"&page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
          for(let i=0;i<json.content.length;  i++){
            json.content[i]['link']="/Property/"+json.content[i]['id']+"/"+json.content[i]['title'];
          }
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
    fetch("http://localhost:2020/property/search-prop?bedroomNo="+this.state.bedroomNo+"&subType="+this.state.type+"&page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
          for(let i=0;i<json.content.length;  i++){
            json.content[i]['link']="/Property/"+json.content[i]['id']+"/"+json.content[i]['title'];
          }
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
    fetch("http://localhost:2020/property/search-prop?bedroomNo="+this.state.bedroomNo+"&subType="+this.state.type+"&page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
          for(let i=0;i<json.content.length;  i++){
            json.content[i]['link']="/Property/"+json.content[i]['id']+"/"+json.content[i]['title'];
          }
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
    const {items,  currentPage, propertyId, totalPages,type, DataisLoaded,bedroomNo,  area, price} = this.state;
    //const history = unstable_HistoryRouter();
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
            <div size="sm" className="searchSection" >
                <h1>Search Property</h1>
                <InputLabel id="demo-simple-select-autowidth-label">Search By Area</InputLabel>
                <TextField type="text"  color="secondary" name="area"   
                    value={area}
                    onChange= {this.areaChange} style={{width: "70%"}}
                    /><br></br>

                <InputLabel id="demo-simple-select-autowidth-label">Search By Bedroom Number</InputLabel>
                  <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        className="searchForm"
                        autoWidth
                        
                        name="bedroomNo"  
                        value={bedroomNo}
                        onChange= {this.bedroomChange}color="secondary" style={{width: "70%"}} >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value="1" >1</MenuItem>
                            <MenuItem value="2" className="OptionBedroomNo">2</MenuItem>
                            <MenuItem value="3"className="OptionBedroomNo">3</MenuItem>
                            <MenuItem value="4"className="OptionBedroomNo">4</MenuItem>
                            <MenuItem value="5"className="OptionBedroomNo">5</MenuItem>
                            <MenuItem value="6"className="OptionBedroomNo">6</MenuItem>
                            <MenuItem value="7"className="OptionBedroomNo">7</MenuItem>
                            <MenuItem value="8"className="OptionBedroomNo">8</MenuItem>
                            <MenuItem value="9"className="OptionBedroomNo">9</MenuItem>
                            <MenuItem value="10+"className="OptionBedroomNo">10+</MenuItem>        
                  </Select><br></br>
                  <InputLabel id="demo-simple-select-autowidth-label">Search By Price</InputLabel>
                  <TextField type="text"  color="secondary" name="price"   
                    value={price}
                    onChange= {this.priceChange} style={{width: "70%"}}
                    /><br></br>

                    <InputLabel id="demo-simple-select-autowidth-label">Search By Type of Property</InputLabel>
                  <Select size="sm" value={type} name="type"  onChange={this.typeChange} id={"info-border  text-black"}
                    className="searchForm" style={{width: "70%"}}   >
                    <MenuItem value="Boys-Quarters" >Boys Quarters</MenuItem>
                    <MenuItem value="Mini-Flat" >Mini-Flat</MenuItem>
                    <MenuItem value="Penthouse" >Penthouse</MenuItem>
                    <MenuItem   value="Self-Contain" >Self Contain</MenuItem>
                    <MenuItem   value="Shared-Apartment" >Shared Apartment</MenuItem>
                    <MenuItem   value="Studio-Apartment" >Studio Apartment</MenuItem>
                    <MenuItem   value="Shop" className="OptionSubType">Shop</MenuItem>
                    <MenuItem   value="Office Spaces" className="OptionSubType">Office Spaces</MenuItem>
                    <MenuItem   value="Flats-and-Apartment" className="OptionSubType">Flats and Apartments</MenuItem>
                    <MenuItem   value="Land" className="OptionSubType">Land</MenuItem>
                    <MenuItem   value="Semi-Detached-Bungalow" className="OptionSubType">Semi Detached Bungalow</MenuItem>
                    <MenuItem   value="Semi-Detached-Duplex" className="OptionSubType">Semi Detached Duplex</MenuItem>
                    <MenuItem   value="Co-working-Space" className="OptionSubType">Co-working Space</MenuItem>
                    <MenuItem   value="Detached-Bungalow" className="OptionSubType">Detached Bungalow</MenuItem>
                    <MenuItem   value="Warehouse" className="OptionSubType">Warehouse</MenuItem>
                    <MenuItem   value="Shop-in-a-mall" className="OptionSubType">Shop In A Mall</MenuItem>
                    <MenuItem   value="Houses" className="OptionSubType">Houses</MenuItem>
                    <MenuItem   value="Terraced-Bungalow" className="OptionSubType">Terraced Bungalow</MenuItem>
                    <MenuItem   value="Commercial-Properties" className="OptionSubType">Commercial Properties</MenuItem>
                    <MenuItem   value="Terraced-Duplex" className="OptionSubType">Terraced Duplex</MenuItem>
                  </Select>

                <div>
                  <button  type="button" onClick={this.searchData} style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px"}}>Search
                      
                  </button>
                  <button type="button" onClick={this.cancelSearch} style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px", margin: "5px"}}>cancel
                        
                  </button>
                </div>
            </div>
            
        <div className="PropertySection">
          <div  className="">
                      <h1>Property For Rent</h1>
                    <div useref="{property.id}"></div>{
                     items.map((property) =>(
                      <div key={property.id} 
                       >
                        <Link to={property.link} className="LinkTo">
                        <br></br>
                        
                        
                          <div  className="innerProperty">
                          
                              <div className= "propertyImage">
                              <img variant="top" className="propertyImg" src={property.url}alt="propertyPicture"/>
                              </div>
                              <br></br>
                          <Card.Title>{property.title}</Card.Title>
                          <p> {property.price}/{property.priceUnit}</p>
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
                                 
                          </div>
                          </Link>
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
        
          </div>
          
          <div className="AdvertSection">
            <p>Advertise with us</p>
          </div>
        </div>
        
        <br></br>
        
        <DownSide/> 

      </div>
   


     
    
    ); 
  }
       
}  

export default UserProperty 
    



