import './App.css';
import Login from './Components/Pages/Login';
import Registration from './Components/Pages/Registration'
import { Routes, Route,useNavigate, useParams,useLocation,Navigate } from "react-router-dom";
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
  },[setUserName])

  console.log(isAuthenticated, "check Authenc");

  useEffect(()=>{
    setIsAuthenticated(sessionStorage.getItem('isAuthenticated'))
  })  

  // const loggedInInfo = (name) =>{
  //   setUserName(name)
  // }

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
        sessionStorage.removeItem('isAuthenticated')
        sessionStorage.removeItem('userName')
        sessionStorage.removeItem('Name')
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
      <Route path="/" element = { <Login  />}>  </Route>
      <Route path="/register" element = { <Registration/>}>  </Route>
     <Route  path="/home" element = { <Home setLocation = {setLocationLast} isAuthenticated={isAuthenticated}/>}> </Route> 
     <Route path="/*" element={<RedirectIfInvalid />} />
    </Routes>      
    </div>
  );
}
function RedirectIfInvalid() {
  const location = useLocation();

  // Define valid paths
  const validPaths = ['/', '/register', '/home'];

  // Check if the current path is valid, if not redirect to the default path ('/')
  if (!validPaths.includes(location.pathname)) {
    return <Navigate to="/" />;
  }

  return null;
}
export default App;
