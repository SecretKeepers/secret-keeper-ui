import registerSvg from '../../assets/images/registerSVG.svg'
const Registration = () =>
{
return (
    <div>
       <div className="container">
      <form>
        <h2 className='text-center'>Sign Up</h2>
        <div className="form-group">
          <label className='mb-2'>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            // value={formData.email}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='my-2'>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            // value={formData.password}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='my-2'>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            // value={formData.confirmPassword}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <button type="submit" className="btn mt-3 content-center btn-primary">
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