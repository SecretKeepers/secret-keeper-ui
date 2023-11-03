import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SecretForm from "../utils/SecretForm";
import NoData from '../../assets/images/Nodata.jpg'
const Home = (props) =>
{
  const [displayForm, setIsDisplayForm] = useState(false);
  
  const {user} = useParams();
  let loggedInUser = sessionStorage.getItem("userName")
  console.log(user=== JSON.parse(loggedInUser) );

  const types = ['Plain text', 'Document', 'Vault', 'Password']

  useEffect (()=>{
    props.setLocation(window.location.href)

  },[])
return(
    // <div style={{display:'flex',justifyContent : 'center',alignItems : 'center'}}>
  <>
            {user=== JSON.parse(loggedInUser) ?  
            <div className="SecretHolder">
               <div className="container custom-container">
                {
                  displayForm && <SecretForm closeForm={()=>setIsDisplayForm(!displayForm)} showModal={displayForm} handleClose={()=>setIsDisplayForm(!displayForm)}/> }
                 <>
                   {/* <button className="btn btn-primary"> Show Secrets</button>
                  <button className="btn btn-primary mx-2" onClick={()=>setIsDisplayForm(!displayForm)}> Create Secrets</button> */}
       <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="category-section mt-5">
            <h5>Type</h5>
            <ul className="list-group">
              {types.map((e)=>(
              <li className="list-group-item" style={{cursor : 'pointer'}}>{e}</li>
              ))}
              
              {/* Add more categories as needed */}
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="buttons-section mt-3">
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary mr-3 m-1" onClick={()=>setIsDisplayForm(!displayForm)} >Create a Secret</button>
            </div>
            <div className="content-container add_border border-left border-right p-3">
              {/* <h6 className="text-center"> Available Secrets</h6> */}
              <ul>
                <div style={{display : 'flex', justifyContent : 'center' , alignItems : 'center', flexDirection : 'column'}}>
                <img style={{width : '40%'}} src={NoData} alt="No Data"/>
                <li> No Secret available</li>
                <button className="btn btn-success ml-3 mt-2 m-1">Display Secrets</button>

                </div>
                {/* <hr></hr> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
               
                 </>
                
               </div>

            </div>
     : <p style={{display : 'flex' , justifyContent : 'center', alignItems : 'center'}} className="mt-4"> You are Not authorized to view / create secrets . Please  <button className="btn btn-primary mx-2"> <a href="/" className="text-white text-decoration-none"> Login </a>  </button> or <button className="btn btn-primary mx-2"> <a href="/register"  className="text-white text-decoration-none">Register</a></button></p>}
  </>
    //  </div>
)
}
export default Home;