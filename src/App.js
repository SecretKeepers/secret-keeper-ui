import './App.css';
import Login from './Components/Pages/Login';
import Registration from './Components/Pages/Registration'
import { Routes, Route,useNavigate, useParams } from "react-router-dom";
import Navbar from './Components/utils/Navbar';
import Home from './Components/Pages/Home';
import { useEffect, useState } from 'react';


function App() {
const Navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // useEffect(()=>{
  //   if(localStorage.getItem("TOKEN")){

  //     checkAuthentication = localStorage.getItem("TOKEN");
  //   }
    
  // },[localStorage.getItem("TOKEN")])
  // console.log(checkAuthentication);

  // window.addEventListener("beforeunload", (ev) => {  
  //   // clear out the local storage
  //   localStorage.removeItem("TOKEN")
  // });

  const authenticationCheck = () =>{
    setIsAuthenticated(true)
  }

  useEffect(()=>{
    if(!sessionStorage.getItem("TOKEN")){
      // Navigate('/')
      setIsAuthenticated(false)
    }
  },[isAuthenticated])

  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element = { <Login />}>  </Route>
      <Route path="/register" element = { <Registration/>}>  </Route>
    {  (isAuthenticated || sessionStorage.getItem("TOKEN") )&& <Route path="/:user" element = { <Home/>}> </Route> }
    </Routes>      
    </div>
  );
}

export default App;
