import * as React from 'react';
import './FeaturedProperty.css';
import SliderRent from './SliderRent';
import SliderSell from './SliderSell';
import SliderFurnished from './SliderFurnished';
import SliderNewlyBuilt from './SliderNewlyBuilt';
import SliderShortLet from './SliderShortLet';
//<img  src="https://bruneiproperty.com.bn/sites/default/files/13936_1_image.jpg" alt="PropertyImage" Premium/>
export default function FeaturedProperty(){

    return(
        
    	<div className="container">
            
	
		<input type="radio" id="i1" className="images" checked />
		<input type="radio" id="i2" className="images" />
		<input type="radio" id="i3" className="images" />
		<input type="radio" id="i4" className="images" />
		<input type="radio" id="i5" className="images" />	
	
		<div className="slide_img" id="one">			
				<SliderRent/>
				
					<label className="prev" for="i5"><span>&#x2039;</span></label>
					<label className="next" for="i2"><span>&#x203a;</span></label>	
			
		</div>
	
	<div className="slide_img" id="two">
			<SliderSell/>
	
				<label className="prev" for="i1"><span>&#x2039;</span></label>
				<label className="next" for="i3"><span>&#x203a;</span></label>
		
	</div>
			
	<div className="slide_img" id="three">
			<SliderFurnished/>	
			
				<label className="prev" for="i2"><span>&#x2039;</span></label>
				<label className="next" for="i4"><span>&#x203a;</span></label>
	</div>

	<div className="slide_img" id="four">
			<SliderNewlyBuilt/>	
			
				<label className="prev" for="i3"><span>&#x2039;</span></label>
				<label className="next" for="i5"><span>&#x203a;</span></label>
	</div>

	<div className="slide_img" id="five">
			<SliderShortLet/>	
			
				<label className="prev" for="i4"><span>&#x2039;</span></label>
				<label className="next" for="i1"><span>&#x203a;</span></label>

	</div>

	<div id="nav_slide">
		<label for="i1" className="dots" id="dot1"></label>
		<label for="i2" className="dots" id="dot2"></label>
		<label for="i3" className="dots" id="dot3"></label>
		<label for="i4" className="dots" id="dot4"></label>
		<label for="i5" className="dots" id="dot5"></label>
	</div>
		
</div>

        
    );


}