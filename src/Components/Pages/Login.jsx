import LoginImg from '../../assets/images/loginpg.jpg'
const Login = () =>
{

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
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label className="text-left">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
           </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password mt-3 text-center">
           <a href="/"  className="text-decoration-none"> Forgot password?</a>
        </p>
        <p className="forgot-password text-center">
           <a href="/" className="text-decoration-none">Sign Up</a>
        </p>
      </form>
       </div>
       </div>
    )

}
export default Login;