import { useState } from 'react';
import LoginImg from '../../assets/images/loginpg.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = (props) =>
{

  const Navigate = useNavigate();
  const[loginFormData, setLoginFormData] = useState([])
  const[tokenS,setTokenS] = useState("");
  

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8080/signin',{
      
        "username" : loginFormData.username,
        "password": loginFormData.password,
          
    },{
      headers :  {
        'Content-Type': 'application/json'      
      },   
    }).then(function (response) {
    //     setTokenS(response.data.token)
    //      console.log(response.data.token)
    //      console.log(tokenS);
         sessionStorage.setItem("TOKEN", JSON.stringify(response.data.token))
         sessionStorage.setItem("userName", JSON.stringify(loginFormData.username?.split('@')[0]))
         Navigate(`/${userId}`)
         props.checkAuthentication();

    })
    .catch(function (error) {
     console.log(error);
    });
  }

  let userId = loginFormData.username?.split('@')[0];
  const handleInputChange = (event) =>{
    setLoginFormData({ ...loginFormData, [event.target.name]: event.target.value });
}

 console.log(loginFormData);
    return (
       <div className="wrapper_div_form">
        <div className="inner_wrapper_form">    
        <div className='imageHeader'>
            <img src={LoginImg} alt="ds"></img>
        </div>    
    <form className='custom_form'>
        <h3 className="text-center">Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="username"
            className="form-control"
            placeholder="Enter email"
            onChange={handleInputChange}
            value={loginFormData.username}
          />
        </div>
        <div className="mb-3">
          <label className="text-left">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleInputChange}
            value={loginFormData.password}

          />
        </div>
        <div className="mb-3">
           </div>
        <div className="d-grid">
          <button type="submit" onClick = {onSubmitHandler} className="btn btn-primary">
            Submit
          </button>
        </div>        
        <p className="forgot-password mt-3 text-center">
           <a href="/"  className="text-decoration-none"> Forgot password?</a>
        </p>
        <p className="forgot-password text-center">
           <a href="/register" className="text-decoration-none">Sign Up</a>
        </p>
      </form>
       </div>
       </div>
    )

}
export default Login;