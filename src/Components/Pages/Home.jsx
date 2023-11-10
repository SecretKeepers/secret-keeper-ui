import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SecretForm from "../utils/SecretForm";
import NoData from '../../assets/images/Nodata.jpg';
import axios from '../../utils/axios';
import MasterKeyForm from "../utils/MasterKeyForm";

const Home = (props) =>
{
  const [displayForm, setIsDisplayForm] = useState(false);
  const [ isMasterKeySet, setIsMasterKeySet] = useState(false);
  const {user} = useParams();
  let loggedInUser = sessionStorage.getItem("userName")
  console.log(user=== JSON.parse(loggedInUser) );

  const types = ['Plain text', 'Document', 'Vault', 'Password']

  useEffect (()=>{
    props.setLocation(window.location.href)
  },[])

 
  

  useEffect(()=>{
    // if(masterKey==='123'){
    //   axios.post('/master/add',{
    //     "masterKey" : masterKey,
    //   },{
    //     headers : {
    //       'Content-Type' : 'application/json'
    //     }
    //   }).then(function(response){
    //     console.log('MasterKey Set', response);
    //   })
    //   .catch(function(error){
    //     console.log(error);
    //   })
    // }
    axios.get("/mstrKey", {}).then(function (response) {
      if (response.data) {
        setIsMasterKeySet(true); // Set setIsMasterKey to true only when there is a value in response.data
      }
    });

  },[])

  const closeMasterKeyForm = ()=>{
    setIsMasterKeySet(!isMasterKeySet)
  }

return(
    // <div style={{display:'flex',justifyContent : 'center',alignItems : 'center'}}>
<>
  {!isMasterKeySet && <MasterKeyForm closeModal={closeMasterKeyForm}/>}
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
          <form className="d-flex mr-2">
          {/* <div className="form-group mt-2" style={{marginRight : '1rem'}}>
            <input
              type="text"
              className="form-control mx-2"
              id="secret"
              name="secret"
              placeholder="Set MasterKey"
              value={masterKey}
              onChange={handleInputChange}
            />
          </div> */}
            <div
              type="submit"
              className="alert alert-danger mt-2 d-flex "
              // onClick={onSubmitMasterKey}
              style={{height:'1rem'}}
            >
               {!isMasterKeySet ?  <p className="text-center equalizer">MasterKey not set</p>
                : <p className="equalizer"> Master Key Set</p>}
            </div>
          
          </form>
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