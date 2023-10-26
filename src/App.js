import './App.css';
import Login from './Components/Pages/Login';
import Registration from './Components/Pages/Registration'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/utils/Navbar';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Navbar/>
    <Routes>
      <Route path="/" element = { <Login/>}>  </Route>
      <Route path="/register" element = { <Registration/>}>  </Route>
    </Routes>      
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
