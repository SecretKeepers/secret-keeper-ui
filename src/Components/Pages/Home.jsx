import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SecretForm from "../utils/SecretForm";
import NoData from "../../assets/images/Nodata.jpg";
import axios from "../../utils/axios";
import MasterKeyForm from "../utils/MasterKeyForm";
import { useLocation } from "react-router-dom";
import AddMasterKeyForm from "../utils/AddMasterKeyForm";

const Home = (props) => {
  const [displayForm, setIsDisplayForm] = useState(false);
  const [isMasterKeySet, setIsMasterKeySet] = useState(false);
  const [valueMasterkey, setIsValueMasterKey] = useState();
  const [masterKeyAdded, setMasterKeyAdded] = useState(false);


  const [secret, setSecret] = useState([]);
  const location = useLocation();
  const propsReceived = location.state;

  const { user } = useParams();

  let loggedInUser = sessionStorage.getItem("userName");

  const types = ["Plain text", "Document", "Vault", "Password"];

  useEffect(() => {
    props.setLocation(window.location.href);
  }, []);

  const closeMasterKeyForm = () => {
    setIsMasterKeySet(!isMasterKeySet);
  };

  const DisplaySecretClicked = (e) => {
    e.preventDefault();
    axios
      .get("/secret/all/decrypted", {
        params: {
          type: "simple",
        },
      })
      .then(function (response) {
        setSecret(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const fetchSecrets()=>{}

  const setMasterkeyValue = (val) => {
    setIsValueMasterKey(val);
    if (setIsMasterKeySet) {
      axios
        .post(
          "/master/add",
          {
            masterKey: `${val}`,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log("MasterKey Set", response);
          ChangingVariableMstrKyAdded();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
 const ChangingVariableMstrKyAdded = () =>{
  console.log('setti');
   sessionStorage.setItem('masterkeyVl', true)
 }

 useEffect(()=>{
  console.log('che');
  setIsMasterKeySet(JSON.parse(sessionStorage.getItem('masterkeyVl')))
 },[])

 console.log(masterKeyAdded);

  return (
    <>
      {!propsReceived?.details?.masterKeySet && props?.isAuthenticated && (
        <MasterKeyForm
          setMasterkeyValue={setMasterkeyValue}
          closeModal={closeMasterKeyForm}
        />
      )}
      {!masterKeyAdded && (
        <AddMasterKeyForm closeModal={closeMasterKeyForm} ChangingVariableMstrKyAdded={ChangingVariableMstrKyAdded} />
      )}
      {props?.isAuthenticated ? (
        <div className="SecretHolder">
          <div className="container custom-container">
            {displayForm && (
              <SecretForm
                closeForm={() => setIsDisplayForm(!displayForm)}
                showModal={displayForm}
                handleClose={() => setIsDisplayForm(!displayForm)}
              />
            )}
            <>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3">
                    <div className="category-section mt-5">
                      <h5>Type</h5>
                      <ul className="list-group">
                        {types.map((e) => (
                          <li
                            className="list-group-item"
                            style={{ cursor: "pointer" }}
                          >
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="buttons-section mt-3">
                      <div className="d-flex justify-content-end">
                        <button
                          className="btn btn-primary mr-3 m-1"
                          onClick={() => setIsDisplayForm(!displayForm)}
                        >
                          Create a Secret
                        </button>
                        <form className="d-flex mr-2">
                          <div
                            type="submit"
                            className="alert alert-danger mt-2 d-flex "
                            style={{ height: "1rem" }}
                          >
                            {!propsReceived?.details?.masterKeySet ? (
                              <p className="text-center equalizer">
                                MasterKey not set
                              </p>
                            ) : (
                              <p className="equalizer"> Master Key Set</p>
                            )}
                          </div>
                        </form>
                      </div>
                      <div className="content-container add_border border-left border-right p-3">
                        {/* <h6 className="text-center"> Available Secrets</h6> */}
                        <ul>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexDirection: "column",
                            }}
                          >
                            {secret?.map((e) => (
                              <li>{e.secretValue}</li>
                            ))}
                            {secret.length === 0 && (
                              <>
                                <img
                                  style={{ width: "40%" }}
                                  src={NoData}
                                  alt="No Data"
                                />
                                <button
                                  className="btn btn-success ml-3 mt-2 m-1"
                                  onClick={DisplaySecretClicked}
                                >
                                  Display Secrets
                                </button>
                              </>
                            )}
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
      ) : (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="mt-4"
        >
          {" "}
          You are Not authorized to view / create secrets . Please{" "}
          <button className="btn btn-primary mx-2">
            {" "}
            <a href="/" className="text-white text-decoration-none">
              {" "}
              Login{" "}
            </a>{" "}
          </button>{" "}
          or{" "}
          <button className="btn btn-primary mx-2">
            {" "}
            <a href="/register" className="text-white text-decoration-none">
              Register
            </a>
          </button>
        </p>
      )}
    </>
    //  </div>
  );
};
export default Home;
