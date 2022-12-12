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



export default function HomePage(){

    return(
        <div>
                <Header/>
               
                
                <h1 className="feature-property"> Featured Property</h1>
                    <FeaturedProperty/>
                    
                    <a href="http://localhost:3000/Search" className="clickmore" > Search Property</a> 
                    <div className="Container" >
                        <div  className="RentDiv" >
                        <p className="RentLabel">For Rent</p>
                        <PropertyRen/>
                        </div>
                        <div className="RentDiv" >
                        <p className="RentLabel">For Sell</p>
                        <PropertySel/>
                        </div>
                        <div className="RentDiv" >
                        <p className="RentLabel">Short Let</p>
                        <PropertyShortLet/>
                        </div><br></br>

                        
                    </div>
                    <div className="Container">
                            <div className ="RentDiv">
                                <p className="RentLabel">Furnished</p>
                                <PropertyFurnished/>    
                            </div>
                            <div className="RentDiv">
                                <p className="RentLabel">Serviced</p>
                                <PropertyServiced/>
                            </div>
                            <div className="RentDiv">
                                <p className="RentLabel">Newly Built</p>
                                <PropertyNewlyBuilt/>
                            </div>
                             
                    </div>
                    
                    <br></br>
                <DownSide/>            
        </div>

        
    );


}