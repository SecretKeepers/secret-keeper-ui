import {  useState } from 'react';
import registerSvg from '../../assets/images/registerSVG.svg'
import axios from "../../utils/axios";
// import { useNavigate } from 'react-router-dom';

const Registration = () =>
{
const [formData, setFormData] = useState([]);
const [isSucceffullyRegistered, setIsSucceffullyRegistered] = useState(false);
const [formErrors, setformErrors] = useState({});
// const Navigate = useNavigate();

const handleInputChange = (event) =>{
    setFormData({ ...formData, [event.target.name]: event.target.value });
}

const onSubmitHandler = (e) =>{
  e.preventDefault();
  let errors = {}

  if(!formData.firstname?.trim()){
    errors.firstNameError = 'First Name Cannot be empty';
  }

  if(!formData.lastname?.trim()){
    errors.lastNameError = 'Last Name Cannot be empty';
  }
  if(!formData.email?.trim()){
    errors.userName = 'Email Cannot be empty';
  }
  if(!formData.password?.trim()){
    errors.passwordError = 'Password Cannot be empty';
  }
  
  if(!formData.confirmPassword?.trim()){
    errors.ConfirmpasswordError = 'Confirm Password field Cannot be empty';
  }

  if(formData.confirmPassword !== formData.password){
    errors.mismatchPass = 'It does not match with password';
  }
  setformErrors(errors)
  if (Object.keys(errors).length > 0) {
    return;
  }

  axios.post('/signup',{
    
      "firstName" : formData.firstname,
      "lastName": formData.lastname,
      "username" : formData.email,
      "password" : formData.password
  
  },{
    headers :  {
      'Content-Type': 'application/json',
    },
  }).then(function (response) {
    setIsSucceffullyRegistered(true)
      setFormData ({
        "firstname" : '',
        "lastname": '',
        "email" : '',
        "password" : '',
        "confirmPassword" : ''
      })
  })
  .catch(function (error) {
    setIsSucceffullyRegistered(false)
    console.log(error);
  });
}
const PrintError = ({msg}) => (
   <p className='text-danger mb-1 float-right'> {msg} </p>
)
console.log(formData)


// useEffect(()=>{
//   if(isSucceffullyRegistered){
//     alert('Successfully Registered Please Login')
//     Navigate('/')
//   }
// },[isSucceffullyRegistered])

return (
    <div>
       <div className="container">
      <form className='custom_form'>
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
          {formErrors.firstNameError && <PrintError msg={formErrors.firstNameError}/>}
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
          {formErrors.lastNameError && <PrintError msg={formErrors.lastNameError}/>}
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
          {formErrors.userName && <PrintError msg={formErrors.userName}/>}
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
          {formErrors.passwordError && <PrintError msg={formErrors.passwordError}/>}
        </div>
        <div className="form-group">
          <label className='my-2'>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
            {formErrors.passwordError && <PrintError msg={formErrors.confirmPassword}/>}
            {formErrors.mismatchPass && <PrintError msg={formErrors.mismatchPass}/>}
        </div>
        { isSucceffullyRegistered &&  <p className='my-2 text-center'> Successfully registered please <a href="/">Sign In </a> </p>}
        <div style={{display:'flex', justifyContent:'center'}}>
        <button type="submit" onClick ={onSubmitHandler} className="btn mt-2 content-center btn-primary">
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