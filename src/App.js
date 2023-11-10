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
  const [currLocation, setCurrLocation] = useState();

  useEffect(()=>{
    setUserName(JSON.parse(sessionStorage?.getItem('userName')))
  },[userName])

  const authenticationCheck = () =>{
    setIsAuthenticated(true)
  }

  // const loggedInInfo = (name) =>{
  //   setUserName(name)
  // }

  console.log(userName);

  // useEffect(()=>{
  //   // if(!sessionStorage.getItem("TOKEN")){
  //   //   Navigate('/check')
  //   //   setIsAuthenticated(false)
  //   // }
  //   console.log('ren');
  // },[isAuthenticated, Navigate])


  const setLocationLast = (loc) =>{
    setCurrLocation(loc)
  }

  useEffect(() => {
    let lastUrl = currLocation;
    const handleBackButton = (e) => {
      const currentUrl = window.location.href;
      if (lastUrl !== currentUrl) {
        // User navigated forward
          // setTimeout(()=>{
          //   alert("Loggin Out");
          // },1000)        
        sessionStorage.removeItem('TOKEN')
        sessionStorage.removeItem('userName')
        setUserName('')
         } else {
       
        // alert("You pressed the forward button");

      }

    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  useEffect(()=>{

  })
  console.log(currLocation);
  

  return (
    <div className="App">
      <Navbar userDetails={userName}/>
    <Routes>
      <Route path="/" element = { <Login checkAuthentication={authenticationCheck}  />}>  </Route>
      <Route path="/register" element = { <Registration/>}>  </Route>
     <Route exact path="/:user" element = { <Home setLocation = {setLocationLast}/>}> </Route> 
    </Routes>      
    </div>
  );
}

export default App;
