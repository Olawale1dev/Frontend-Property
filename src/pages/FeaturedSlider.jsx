import './FeaturedSlider.css';
import SliderRent from './SliderRent';
import SliderSell from './SliderSell';
import SliderFurnished from './SliderFurnished';



        let slideIndex = 0;
        showSlides();

        function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
       // slides[slideIndex-1].style.display = "block";  
        //dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
        }

export default function FeaturedSlider(){

        

    return(
        
    	<div>

                <div className="slideshow-container">

                <div className="mySlides fade" id="mySlides">
                
                <SliderRent/>
                <div className="text">Property For Rent</div>
                </div>

                <div className="mySlides fade" id="mySlides">
                
                <SliderSell/>
                <div className="text">Property For Sell</div>
                </div>

                <div className="mySlides fade" id="mySlides">
                    
                    <SliderFurnished/>
                    <div className="text">Furnished Property</div>
                </div>

                </div>
                <br></br>

                <div className='SpanForDot'>
                    <span className="dot" id="dot" ></span> 
                    <span className="dot" id="dot" ></span> 
                    <span className="dot" id="dot" ></span> 
                </div>
              

        </div>

        
    );


}