import * as React from "react";
import { useState} from 'react';
//import {Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/ButtonBase';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {Container} from '@mui/material';
import Box from '@mui/material/Box';
import Header from '../pages/Header';
import '../pages/My.css';




export default function MyPro(){

  const [title, setTitle]=useState("")
    const [description, setDescription] = useState('')
    const [agentName, setAgentName] = useState('')
    const [agentNumber, setAgentNumber] = useState('')
    const [url, setUrl] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [type, setType] = useState('')
    const [purpose, setPurpose] = useState('')
    const [bedroomNo, setBedroomNo] = useState('')
    const [bathroomNo, setBathroomNo] = useState('')
    const [toiletNo, setToiletNo] = useState('')
    const [price, setPrice] = useState('')
    const [locality, setLocality] = useState('')
    const [state, setState] = useState('')
    const [area, setArea] = useState('')
    const [streetName, setStreetName] = useState('')
    const [status, setStatus] = useState('')
    const [subType , setSubType]= useState('')
    const [size , setSize]= useState('')
    const [youtubeLink, setYoutubeLink] = useState('')
    


    
   

    const handlePurpose = (event) => {
      setPurpose(event.target.value);
    };

    const handleType = (event) => {
      setType(event.target.value);
    };

    const handleSubtype = (event) => {
      setSubType(event.target.value);
    };

    const  handleBedroomNo = (event) => {
      setBedroomNo(event.target.value);
    };

    const  handleBathroomNo = (event) => {
      setBathroomNo(event.target.value);
    };

    const  handleToiletNo = (event) => {
      setToiletNo(event.target.value);
    };


    const  handleStatus = (event) => {
      setStatus(event.target.value);
    };

    //const showVideo=(event) => {
     // var youtubeLink = document.getElementById("youtubeLink").value
      //document.getElementById("myFrame").src = youtubeLink }
     

  //<button onclick={showVideo}>Check</button>
             // <br></br>
             // <iframe id="myFrame" width="420" height="345" title={youtubeLink}>Youtube Video</iframe><br></br>
          //<br></br>
    
    
          const handleClick= async (e)=>{
            e.preventDefault()
           // const blog={title, tagName, description, publisher, url}
            //console.log(blog)
            try{
            // let post = {title: title, tagName: tagName, description: description, publisher: publisher, url: url };
             let newpost = new FormData(document.getElementById("property-post-form"));
             console.log(newpost.getAll)
            let res = await
             fetch("http://localhost:2020/property/post", { method : "POST",   headers: {"Accept": "application/json" }, 
             body: newpost
           });
           let resJson = await res.json();
           console.log(resJson);
           if(res.status === 200 && typeof resJson.id == 'number' && resJson.id > 0 ){
             alert("Post created successfully");
             //setMessage("Post created successfully");
             setTimeout(function(){window.location.replace("http://localhost:3000");}, 2000)
             
           }else{
             alert("error creating post")
           }
         }catch (err){
           console.log(err);
         }
         };
      
   



    


    return(
      <div>
        <Header/>
      
        <div className="PostPropertyBackground">
            
              <Container  className="min-h-screen flex flex-col text-black ">
              
              <Box id="property-post-form"
              // action="http://localhost:2020/property/post" object="Property" method="POST"
                component="form" encType="multipart/form-data"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                  <h1 style={{color:"blue"}}><u> Post Property </u></h1>
                <TextField  type="text" label="title" color="secondary" name="title"focused  
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
                required /><br></br>

                <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Purpose</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className="OptionPurpose"
                    autoWidth
                    label="Purpose"
                    name="purpose" focused 
                    value={purpose}
                    onChange= {handlePurpose}color="secondary">
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value="For-Rent" className="OptionPurpose">For Rent</MenuItem>
                        <MenuItem value="For-Sell" className="OptionPurpose">For Sell</MenuItem>
                        <MenuItem  value="Short-Let"className="OptionPurpose">Short Let</MenuItem>
                    </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Type Of Property</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className="OptionType"
                    autoWidth
                    label="Type Of Property"
                    name="type" focused 
                    value={type}
                    onChange= {handleType}color="secondary">
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem   value="Boys-Quarters" className="OptionSubType">Boys Quarters</MenuItem>
                        <MenuItem   value="Mini-Flat" className="OptionSubType">Mini-Flat</MenuItem>
                        <MenuItem   value="Penthouse" className="OptionSubType">Penthouse</MenuItem>
                        <MenuItem   value="Self-Contain" className="OptionSubType">Self Contain</MenuItem>
                        <MenuItem   value="Shared-Apartment" className="OptionSubType">Shared Apartment</MenuItem>
                        <MenuItem   value="Studio-Apartment" className="OptionSubType">Studio Apartment</MenuItem>
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
                    </FormControl>


                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Sub type Of Property</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className="OptionSubType"
                    autoWidth
                    label="Sub type Of Property"
                    name="subType" focused 
                    value={subType}
                    onChange= {handleSubtype}color="secondary">
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem   value="Conference-Room" className="OptionSubType">Conference Room</MenuItem>
                        <MenuItem   value="Desk" className="OptionSubType">Desk</MenuItem>
                        <MenuItem   value="Meeting-Room" className="OptionSubType">Meeting Room</MenuItem>
                        <MenuItem   value="Private Office" className="OptionSubType">Private Office</MenuItem>
                        <MenuItem   value="Workstation" className="OptionSubType">Workstation</MenuItem>
                    </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Bedrooms</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className="OptionBedroomNo"
                    autoWidth
                    label="Bedrooms"
                    name="bedroomNo" focused 
                    value={bedroomNo}
                    onChange= {handleBedroomNo}color="secondary">
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

                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Bathrooms</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className="OptionBathroomNo"
                    autoWidth
                    label="Bathrooms"
                    name="bathroomNo" focused 
                    value={bathroomNo}
                    onChange= {handleBathroomNo}color="secondary">
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value="1" className="OptionBathroomNo">1</MenuItem>
                        <MenuItem value="2" className="OptionBathroomNo">2</MenuItem>
                        <MenuItem value="3"className="OptionBathroomNo">3</MenuItem>
                        <MenuItem value="4"className="OptionBathroomNo">4</MenuItem>
                        <MenuItem value="5"className="OptionBathroomNo">5</MenuItem>
                        <MenuItem value="6"className="OptionBathroomNo">6</MenuItem>
                        <MenuItem value="7"className="OptionBathroomNo">7</MenuItem>
                        <MenuItem value="8"className="OptionBathroomNo">8</MenuItem>
                        <MenuItem value="9"className="OptionBathroomNo">9</MenuItem>
                        <MenuItem value="10+"className="OptionBathroomNo">10+</MenuItem>
                        
                    </Select>
                    </FormControl>
                

                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Toilets</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className="OptionToilets"
                    autoWidth
                    label="Toilets"
                    name="toiletNo" focused 
                    value={toiletNo}
                    onChange= {handleToiletNo}color="secondary">
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value="1" className="OptionToilets">1</MenuItem>
                        <MenuItem value="2" className="OptionToilets">2</MenuItem>
                        <MenuItem value="3"className="OptionToilets">3</MenuItem>
                        <MenuItem value="4"className="OptionToilets">4</MenuItem>
                        <MenuItem value="5"className="OptionToilets">5</MenuItem>
                        <MenuItem value="6"className="OptionToilets">6</MenuItem>
                        <MenuItem value="7"className="OptionToilets">7</MenuItem>
                        <MenuItem value="8"className="OptionToilets">8</MenuItem>
                        <MenuItem value="9"className="OptionToilets">9</MenuItem>
                        <MenuItem value="10+"className="OptionToilets">10+</MenuItem>
                        
                    </Select>
                    </FormControl>

                <TextField type="text" label="Size" color="secondary" name="size" focused  
                value={size}
                onChange= {(e) => setSize(e.target.value)}
                required placeholder="e.g: 1sqm"/><br></br>


                <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Status</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className="OptionStatus"
                    autoWidth
                    label="Status"
                    name="status" focused 
                    value={status}
                    onChange= {handleStatus}color="secondary">
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem  value="Furnished" className="OptionStatus">Furnished</MenuItem>
                        <MenuItem  value="Serviced" className="OptionStatus">Serviced</MenuItem>
                        <MenuItem value="Newly-Built" className="OptionStatus">Newly Built</MenuItem>
                    </Select>
                    </FormControl>
                
                
                <TextField type="text" label="State" color="secondary" name="state" focused 
                value={state}
                onChange= {(e) => setState(e.target.value)}
                required placeholder="e.g: Lagos"/><br></br>

                <TextField type="text" label="Locality" color="secondary" name="lacality" focused 
                value={locality}
                onChange= {(e) => setLocality(e.target.value)}
                
                required placeholder="e.g: Ikeja"/><br></br>

                <TextField type="text" label="Area" color="secondary" name="area" focused 
                value={area}
                onChange= {(e) => setArea(e.target.value)}
                
                required placeholder="e.g: Alausa"/><br></br>

                <TextField type="text" label="Street / Estate / Neighbourhood" color="secondary" name="streetName" focused 
                value={streetName}
                onChange= {(e) => setStreetName(e.target.value)}
                
                required /><br></br>

                <TextField type="text" label="Price" color="secondary" name="price" focused 
                value={price}
                onChange= {(e) => setPrice(e.target.value)}
                
                required placeholder="e.g: 30,000,000"/><br></br>

                <p>Description</p>
                    <TextareaAutosize type="text" label="description" color="secondary" name="description" focused 
                    value={description}
                    onChange= {(e) => setDescription(e.target.value)}
                    className="TextArea" style={{ width: 220, height: 300 }}/>
                    <br></br>
                    
                  
                <TextField type="text" label="Agent/Landlord Name" color="secondary" name="agentName" focused 
                value={agentName}
                onChange= {(e) => setAgentName(e.target.value)}
                
                required /><br></br>

                <TextField type="tel" label="Agent/Landlord WhatsApp Number" color="secondary" name="agentNumber" focused 
                value={agentNumber}
                onChange= {(e) => setAgentNumber(e.target.value)}
                
                required placeholder="e.g: 08055000000"/><br></br>

                <TextField type="file"   label="primary" color="secondary" name="url" focused  
                  value={url}
                  onChange= {(e) => setUrl(e.target.value)} multiple
                  /><br></br>

                <TextField type="file"   label="image 1" color="secondary" name="image1" focused  
                  value={image1}
                  onChange= {(e) => setImage1(e.target.value)} multiple
                  /><br></br>

                <TextField type="file"   label="image 2" color="secondary" name="image2" focused  
                  value={image2}
                  onChange= {(e) => setImage2(e.target.value)} multiple
                  /><br></br>

                <TextField type="file"   label="image 3" color="secondary" name="image3" focused  
                  value={image3}
                  onChange= {(e) => setImage3(e.target.value)} multiple
                  /><br></br>


                <TextField type="text" label="Youtube video link" color="secondary" name="youtubeLink" focused 
                value={youtubeLink}
                onChange= {(e) => setYoutubeLink(e.target.value)}
                
                required  id="YoutubeLink" /><br></br>
                
                <Button style={{background:"blue", color:"white", width:"100px", height: "auto", padding:"5px", size:"20px"}}type="submit" onClick = {handleClick}>SAVE</Button>
                </Box>
                    
              </Container>
              Already Have an Account ?
                <button href="http://localhost:3000/login"  className="btn btn-primary"> Login</button>
        </div>
    </div>
        

       

      

        

        
    
      
      

    );


}
 
