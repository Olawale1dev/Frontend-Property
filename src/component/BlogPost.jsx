import * as React from 'react';
import { useState} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/ButtonBase';

import {Container} from '@mui/material'
import '../pages/My.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';





 function BlogPost() {
    const [title, setTitle]=useState("")
    const [description, setDescription] = useState('')
    const [tagName, setTagName] = useState('')
    const [publisher, setPublisher] = useState('')
    const [url, setUrl] = useState('')
    
   

    //const header = new Headers({ "Access-Control-Allow-Origin": "http://localhost:3000" });


    const handleClick= async (e)=>{
     e.preventDefault()
    // const blog={title, tagName, description, publisher, url}
     //console.log(blog)
     try{
     // let post = {title: title, tagName: tagName, description: description, publisher: publisher, url: url };
      let newpost = new FormData(document.getElementById("blog-post-form"));
      console.log(newpost.getAll)
     let res = await
      fetch("http://localhost:2020/blog/post", { method : "POST",   headers: {"Accept": "application/json" }, 
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
     //fetch("http://localhost:2020/blog/post")
      //.then((res) => res.json())
      //.then(() => alert("New user added"));}//window.location.replace("http://localhost:3000")}

      
      //"Access-Control-Allow-Origin": "*"
      //fetch("http://localhost:2020/Blog/Post", { headers: header })
      //.then((res) => res.json())
      //.then((data) => alert("New user added"));}



      return (
    
      <div className="PostPropertyBackground">
       
          <Container  className="min-h-screen flex flex-col text-black ">
            
            <Box id ="blog-post-form"
            //action="http://localhost:2020/blog/post" object="blog" method="POST"
              component="form" encType="multipart/form-data" 
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <h1 style={{color:"blue"}}><u> Add Blog Post </u></h1>
              <TextField  type="text" label="title" color="secondary" name="title"focused  
              value={title}
              onChange= {(e) => setTitle(e.target.value)}
              /><br></br>
              

              <TextField type="file" label="image" color="secondary" name="url" focused  
              value={url}
              onChange= {(e) => setUrl(e.target.value)}
              /><br></br>
              
              <p>Description</p>
              <TextareaAutosize type="text" label="description" color="secondary" name="description" focused 
              value={description}
              onChange= {(e) => setDescription(e.target.value)}
              className="TextArea" style={{ width: 220, height: 300 }}/><br></br>

              <TextField type="text" label="publisher" color="secondary" name="publisher" focused 
              value={publisher}
              onChange= {(e) => setPublisher(e.target.value)}
              
              /><br></br>

              <TextField type="text" label="Tag Name" color="secondary" name="tagName" focused 
              value={tagName}
              onChange= {(e) => setTagName(e.target.value)}
              
              /><br></br>


              <Button style={{background:"blue", color:"white", width:"100px", height: "auto", padding:"5px", size:"20px"}} type = "submit" onClick = {handleClick} >SAVE</Button>
              </Box>
                  
            </Container>

        </div>
  );
    }

    export default BlogPost
  
   