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
  const [userName , setUserName] = useState();

  // useEffect(()=>{
  //   setUserName(JSON.parse(sessionStorage.getItem('userName')))
  // },[userName])

  const authenticationCheck = () =>{
    setIsAuthenticated(true)
  }

  const loggedInInfo = (name) =>{
    setUserName(name)
  }

  console.log(userName);

  // useEffect(()=>{
  //   // if(!sessionStorage.getItem("TOKEN")){
  //   //   Navigate('/check')
  //   //   setIsAuthenticated(false)
  //   // }
  //   console.log('ren');
  // },[isAuthenticated, Navigate])
  return (
    <div className="App">
      <Navbar userDetails={userName}/>
    <Routes>
      <Route path="/" element = { <Login checkAuthentication={authenticationCheck} onLogin={loggedInInfo} />}>  </Route>
      <Route path="/register" element = { <Registration/>}>  </Route>
     <Route exact path="/:user" element = { <Home/>}> </Route> 
    </Routes>      
    </div>
  );
}

export default App;
