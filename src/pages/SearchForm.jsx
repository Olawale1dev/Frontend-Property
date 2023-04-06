import React from 'react';
import './My.css'
import bedroom from './Assets/bedroom.jpg';
import bathroom from './Assets/bathroom.jpg';
import toilet from './Assets/toilet.jpg';
import locationicon from './Assets/locationicon.png'; 
import InputLabel from '@mui/material/InputLabel';
import {Card,  Button} from 'react-bootstrap';
import { TextField } from "@mui/material";
import { Link} from 'react-router-dom';

class SearchForm extends React.Component {


  constructor(props) {
    super(props);

   
    this.state = {
        items: [],
        currentPage : 0,
        lastPage : 0,
        search:'',
        bedroomNo:'',
        type:'',
        number:'',
        price:'',
        onePage:'',
        data:'',
        itemsPerPage: 5,
        DataisLoaded: false
    };
  }
 

  numberChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

 

  searchData = () => {
    
    fetch("http://localhost:2020/property/my-property/"+this.state.number+"?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
        .then((res) => res.json())
        .then((json) => {
          console.log(json.content)
          for(let i=0;i<json.content.length;  i++){
            json.content[i]['link']="/Property/"+json.content[i]['id']+"/"+json.content[i]['title'];
          }
            this.setState({
              items: json.content,
              totalPages: json.totalPages,
              numberOfElements: json.numberOfElements,
              totalElements: json.totalElements,
              currentPage : json.number + 1,
              PropertyLoaded: true
            });
           
        });
         
  };

  findFirstPage(currentPage){
    currentPage -=1;
    
    fetch("http://localhost:2020/property/my-property/"+this.state.number+"?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
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
    fetch("http://localhost:2020/property/my-property/"+this.state.number+"?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
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

  
 

  findLastPage(){
   let condition = Math.ceil(this.state.totalElements / this.state.itemsPerPage) ;
   if(this.state.currentPage < condition ){
    fetch("http://localhost:2020/property/my-property/"+this.state.number+"?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
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
        this.searchData();
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
  this.setState({number: ''});
  
  };
  

  searchDataPrev = (currentPage) => {
    currentPage =1;
    let prevPage = 1;
    let currentMinusPrevPage = this.state.currentPage - prevPage 
    if(this.state.currentPage > prevPage){
    fetch("http://localhost:2020/property/my-property/"+this.state.number+"?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
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
    fetch("http://localhost:2020/property/my-property/"+this.state.number+"?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
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
    fetch("http://localhost:2020/property/my-property/"+this.state.number+"?page="+this.state.currentPage+"&size="+this.state.itemsPerPage)
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
    const { items, currentPage, propertyId, totalPages,type, DataisLoaded,bedroomNo,  number, price} = this.state;
    return (
      <>
        {!this.items ? (
          // Render form if searchResults is null
          <form>
          <h1>Search Property</h1>
          <InputLabel id="demo-simple-select-autowidth-label">My property</InputLabel>
          <TextField type="number"  color="secondary" name="number"   
              value={number}
              onChange= {this.numberChange} style={{width: "70%"}}
              /><br></br>

            

          <div>
            <button  type="button" onClick={this.searchData} style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px"}}>Search
                
            </button>
            <button type="button" onClick={this.cancelSearch} style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px", margin: "5px"}}>cancel
                  
            </button>
          </div>
          </form>
        ):(
          // Render search results if searchResults is not null
          <div>
            <div useref="{property.id}"></div>
          {
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


            
          
        )}
        
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
      </>
    );
  }
}
export default SearchForm