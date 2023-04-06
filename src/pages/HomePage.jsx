import * as React from 'react';
import Header from './Header';
//import MyPro from './MyPro';
//import MyFooter from './footer';

import './footer.css';
import FeaturedProperty from'./FeaturedProperty';
import PropertyRen from './PropertyRen';
import PropertyFurnished from './PropertyFurnished';
import PropertyServiced from './PropertyServiced';
import PropertyNewlyBuilt from './PropertyNewlyBuilt';
import PropertyShortLet from './PropertyShortLet';
import PropertySel from './PropertySel';
import DownSide from './DownSide';
import Search from './Search';
import  './HomePage.css';
import Similar from './SimilarRent';
//import FeaturedSlider from './FeaturedSlider';
import Card from 'react-bootstrap/Card';



export default function HomePage(){

    return(
        <div>
                
               
                
                <Card.Title className="feature-property"> Featured Property</Card.Title>
                    <FeaturedProperty/>
                    
                    
                    <div className="Container" >
                        <div  className="RentDiv" >
                        <Card.Title className="RentLabel">For Rent</Card.Title>
                        <PropertyRen/>
                        </div>
                        <div className="RentDiv" >
                        <Card.Title className="RentLabel">For Sell</Card.Title>
                        <PropertySel/>
                        </div>
                        <div className="RentDiv" >
                        <Card.Title className="RentLabel">Short Let</Card.Title>
                        <PropertyShortLet/>
                        </div><br></br>

                        
                    </div>
                    <div className="Container">
                            <div className ="RentDiv">
                                <Card.Title className="RentLabel">Furnished</Card.Title>
                                <PropertyFurnished/>    
                            </div>
                            <div className="RentDiv">
                                <Card.Title className="RentLabel">Serviced</Card.Title>
                                <PropertyServiced/>
                            </div>
                            <div className="RentDiv">
                                <Card.Title className="RentLabel">Newly Built</Card.Title>
                                <PropertyNewlyBuilt/>
                            </div>
                             
                    </div>
                    
                    <br></br>
                <DownSide/>            
        </div>

        
    );


}