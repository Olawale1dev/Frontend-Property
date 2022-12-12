import React from "react";
import Login from './component/Login';
import Signup from './component/Signup';
import HomePage from "./pages/HomePage";
import PostProperty from './component/PostProperty';
import BlogPost from './component/BlogPost'
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ForRent from "./pages/ForRent";
import AllPost from "./pages/AllPost";
import ForSell from "./pages/ForSell";
import ShortLet from "./pages/ShortLet";
import Furnished from "./pages/Furnished";
import Serviced from "./pages/Serviced";
import NewlyBuilt from "./pages/NewlyBuilt";
import ForgetPasswordEmail from"./pages/ForgetPasswordEmail";
import ResetPassword from "./pages/ResetPassword";
import Search from "./pages/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import OneProperty from "./pages/OneProperty";
import SimilarProperty from "./pages/SimilarProperty";
import NextSimilarProperty from "./pages/NextSimilarProperty";




 function MyRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/Login" exact element={<Login/>} />
          <Route path="/Signup" exact element={<Signup/>} />
          <Route path="/PostProperty" exact element={<PostProperty/>} />
          <Route path="/BlogPost" exact element={<BlogPost/>} />
          <Route path="/ForRent"  element={<ForRent/>} />
          <Route path="/ForSell" exact element={<ForSell/>} />
          <Route path="/ShortLet" exact element={<ShortLet/>} />
          <Route path="/Furnished" exact element={<Furnished/>}/>
          <Route path="/Serviced" exact element={<Serviced/>}/>
          <Route path="/NewlyBuilt" exact element={<NewlyBuilt/>}/>
          <Route path="/About" exact element={<About/>} />
          <Route path="/Contact" exact element={<Contact/>} />
          <Route path="/Blog" exact element={<Blog/>} />
          <Route path="/AllPost" exact element={<AllPost/>} />
          <Route path="/forgotPassword" exact element={<ForgetPasswordEmail/>} />
          <Route path="/ResetPassword" exact element={<ResetPassword/>} />
          <Route path="/Search" exact element ={<Search/>}/>
          <Route path="/Property/:id/:title" exact element={<OneProperty/>}/>
          <Route path="/Properties/:id/:title" exact element={<SimilarProperty/>}/>
          <Route path="/property/:id/:title" exact element={<NextSimilarProperty/>}/>


        </Routes>
      </div>
    </Router>
  );
}



export default MyRouter