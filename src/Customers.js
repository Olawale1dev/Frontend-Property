import * as React from 'react';
import { useState, useEffect} from 'react'
import Paper from '@mui/material/Paper'
/*const header = new Headers({ "Access-Control-Allow-Origin": "*" });*/


export default function ColorTextFields(){

const [blog,setBlog]=useState([])

useEffect(() => {fetch('http://localhost:2020/2$/blog', {
     mode: 'no-cors',
     method: "post",
     headers: {
          "Content-Type": "application/json"
     },
     body: JSON.stringify()
})
   
 },[])
 return(
 <Paper>
      <h1>Blogs</h1>

      {blog.map(blog=>(
       <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={blog.id}>
        title:{blog.title}<br></br>
        url:{blog.url}<br></br>
        description:{blog.description}<br></br>
        tagName:{blog.tagName}<br></br>
        publisher:{blog.publisher}<br></br>
       </Paper>  
      
       ))}
       
    

      </Paper>
 )

}

/* fetch("http://localhost:2020/2$/blog",{ headers: header })  
    
   .then(res =>res.json())
 .then((result)=>{setBlog(result);
 }
 )*/