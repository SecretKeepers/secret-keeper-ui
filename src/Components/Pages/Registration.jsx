import { useState } from 'react';
import registerSvg from '../../assets/images/registerSVG.svg'
import axios from 'axios';

const Registration = () =>
{
const [formData, setFormData] = useState([]);

const handleInputChange = (event) =>{
    setFormData({ ...formData, [event.target.name]: event.target.value });
}

const onSubmitHandler = (e) =>{
  e.preventDefault();
  console.log('clicked', formData);
  axios.post('http://localhost:8080/signup',{
    
      "firstName" : formData.firstname,
      "lastName": formData.lastname,
      "username" : formData.email,
      "password" : formData.password
  
  },{
    headers :  {
      'Content-Type': 'application/json',
      'Access-Control-origin' : "*"
    },
    withCredentials : true
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

console.log(formData)
return (
    <div>
       <div className="container">
      <form>
        <h2 className='text-center'>Sign Up</h2>
        <div className="form-group">
          <label className='mb-2'>First Name </label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='mb-2'>Last Name</label>
          <input
            type="lastname"
            className="form-control"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='mb-2'>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='my-2'>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label className='my-2'>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div> */}
        <div style={{display:'flex', justifyContent:'center'}}>
        <button type="submit" onClick ={onSubmitHandler} className="btn mt-3 content-center btn-primary">
          Register
        </button>
        </div>
      </form>
      <div className='svgHolderReg'>
        <img src={registerSvg} alt="Register"/>
      </div>
    </div>

    </div>
)
}
export default Registration;