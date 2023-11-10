
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from '../../utils/axios'

const MasterKeyForm = (props) =>{
    const [ masterKey, setMasterKey] = useState();
    const [isSubmitted , setIsSubmitted] = useState(false);
    
    const handleInputChange = (e) =>{
          setMasterKey(e.target.value)
      }

      const onSubmitMasterKey = (e) =>{
        e.preventDefault();
        if(!masterKey){
          return;
        }
        axios.post('/master/set',{
          "masterKey" : masterKey,
        },{
          headers : {
            'Content-Type' : 'application/json'
          }
        }).then(function(response){
          console.log('MasterKey Set', response);
          setIsSubmitted(true);
        })
        .catch(function(error){
          console.log(error);
        })
      }


    return(
    <Modal
      show={props.closeModal && !isSubmitted} 
      onHide={props.closeModal}
      className="custom-modal-width"
    >
      <Modal.Header closeButton>
        <h6 className="text-center"> Set Master Key</h6>
      </Modal.Header>
      <Modal.Body>
      <form className="d-flex mr-2">
          <div className="form-group mt-2" style={{marginRight : '1rem'}}>
            <input
              type="text"
              className="form-control mx-2"
              id="secret"
              name="secret"
              placeholder="Set MasterKey"
              value={masterKey}
              onChange={handleInputChange}
            />
          </div>
         
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              className="btn btn-primary my-2"
              onClick={onSubmitMasterKey}
            >
              Set Master Key
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
    )
}

export default MasterKeyForm;