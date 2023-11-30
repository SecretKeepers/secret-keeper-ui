import { useState } from "react";
import axios from "../../utils/axios";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
const SecretForm = (props) => {
  const [secretData, setSecretData] = useState([]);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleInputChange = (event) => {
    setSecretData({ ...secretData, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    setSecretData({
      ...secretData,
      // token: JSON.parse(sessionStorage.getItem("TOKEN")),
    });
    console.log(secretData.token);
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitClicked(!isSubmitClicked);
    axios
      .post(
        "/secret/create",
        {
          type: "simple",
          secret: secretData.secret,
          description: secretData.description,
          // masterKey: "123",
        },
        {
          headers: {
            "Content-Type": "application/json",
            // 'Access-Control-Allow-Origin': '*'
            // 'Authorization' : `Bearer ${secretData.token}`
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setSecretData({
          type: "",
          secret: "",
          description: "",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <Modal
      show={props.showModal}
      onHide={props.handleClose}
      className="custom-modal-width"
    >
      <Modal.Header closeButton>
        <Modal.Title>Create a Secret</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="type">Type</label>
              <select
              className="form-control"
              id="type"
              name="type"
              value={secretData.type}
              onChange={handleInputChange}
            >
              <option value="">Select Type</option>
              <option value="password">Simple</option>
              <option value="plain text">Plain Text</option>
              <option value="document">Document</option>
              <option value="vault">Vault</option>
            </select>
          </div>
          <div className="form-group ">
            <label htmlFor="secret mb-2">Secret</label>
            <input
              type="text"
              className="form-control"
              id="secret"
              name="secret"
              placeholder="Enter Secret"
              value={secretData.secret}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control my-2"
              id="description"
              name="description"
              placeholder="Enter Description"
              value={secretData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              className="btn btn-primary my-2"
              onClick={onSubmitHandler}
            >
              Store my Secret
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SecretForm;
