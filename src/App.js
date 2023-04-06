import Header from './pages/Header';
import MyPro from './pages/MyPro';
import MyRouter from './MyRouter';
//import Footer from './pages/footer';
import './pages/footer.css';





//import {Router, Route} from "react-router-dom";


// import your route components too

//<footer className="footer">
  //      <p> Bulit By OlaTech MyProperty.com.ng  &copy; 2022</p>
    //  </footer>

function App(){


    return(
      <div>
    <MyPro/> 
    <Header/>
    <form action='http://localhost:2020/logout'>
      <button  type='submit' value="logout">logout</button>
    </form>
    <MyRouter/>
       
      </div>
    );

} 
  

export default App;


 
      
