import React, { Component } from 'react';




class UserProfile extends Component  {
  // Declare a state variable to store the user's profile information
  

  constructor(props) {
    super(props);

   
    this.state = {
        profile: [],
        currentProfile : 0,
        email:"",
      
        DataisLoaded: false
    };
  }
  //componentDidMount() {
   // this.findProfle(this.state.currentProfile);
   // this.onePerPage(this.state);
   // this.onePage(this.state.onePage);
    //this.findPrevPage(this.state.currentPage);
    //this.findLastPage(this.state.lastPage);
   // this.searchDataPrev(this.state.currentPage)
  //}
  emailChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  findProfile() {
    
  fetch("http://localhost:2020/find/sodiq105@gmail.com")
      .then((res) => res.json())
      .then((json) => {
          //let newJson = json;
          for(let i=0;i<json.content.length;  i++){
            json.content[i]['link']="/Property/"+json.content[i]['id']+"/"+json.content[i]['title'];
          }
          this.setState({
              items: json,
              DataisLoaded: true
          })
          
      });
     
};
  // Fetch the user's profile information from the backend
  /*useEffect(() => {
    async function fetchProfile() {
      // Send a GET request to the backend to retrieve the user's profile data
      const response = await fetch('http://localhost:2020/profile', { method : "GET", mode: "no-cors",  headers: {"Accept": "application/json", }});
      const profileData = await response.json();

      // Update the component's state with the user's profile data
      setUserProfile(profileData);
    }
    fetchProfile();
  }, []);*/

  render() {
    const {profile, userProfile,email,  DataisLoaded} = this.state;
   
       
    
    if (!DataisLoaded) return 
     <div>
        <h1> Pleses wait some time.... </h1> 
      </div> ;
      if (userProfile == null) return 
      <div>
         <h1> No property for your search input.... </h1> 
       </div> ;

  // Render the user's profile information
  return (
    <div>
      <div>
        <form>
          input your email
        <input type="email" value={email} onChange={this.emailChange} name="email"> Email</input>
        <button  type="button" onClick={this.findProfile} style={{background:"blue", color:"white", width:"100px", height:"auto", padding:"5px", size:"20px"}}>My Profile
                      
        </button>
        </form>
      </div>
       <div  className="">
        
                      <h1>Property For Rent</h1>
                    <div useref="{user.id}"></div>{
                     profile.map((user) =>(
                      <div key={user.id} 
                       >
                        
                        <br></br>
                        
                        
                          <div  className="innerProperty">
                          
                          <div className="Location">
                          
                                <p>First Name: {user.firstName}</p>
                                <p>Last Name: {user.lastName}</p>  
                            </div>
                            
                                <div className="icons">
                                    <div className="row">
                                        <div className="column">
                                        
                                        <p className="ParaNo">Email:{user.email} </p><br></br>
                                        
                                        <p className="ParaNo">Gender: {user.genderTitle}</p><br></br>
                                        
                                        <p className="ParaNo">Role {user.role} </p><br></br>
                                        <p className="ParaNo">State {user.state} </p><br></br>
                                        <p className="ParaNo">City {user.city} </p><br></br>
                                        <p className="ParaNo">Zip {user.zip} </p>
                                        </div>
                                    
                                    </div>
                                
                                  </div >
                                 
                          </div>
                          
                      </div>

                        
              
                  ))  
                }
            

       
              
        </div>
    </div>
  );
  }
}

export default UserProfile;
