import { useState } from 'react';
import LoginImg from '../../assets/images/loginpg.jpg';
import axios from 'axios';
const Login = () =>
{
  const[loginFormData, setLoginFormData] = useState([])

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8080/signin',{
      
        "username" : loginFormData.email,
        "password": loginFormData.password,
          
    },{
      headers :  {
        'Content-Type': 'application/json'      
      },   
    }).then(function (response) {
         console.log(response)
    })
    .catch(function (error) {
     console.log(error);
    });
  }

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
    <form>
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