
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const UserProfile = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState();

  useEffect(()=>{
    setUserName(JSON.parse(sessionStorage.getItem('Name')))
  },[])

  return (
    <>
      
      <div className="modal-container">
          <div className="modal-content">
            {/* <span className="close" >&times;</span> */}
            <p>Name: {userName} </p>
            <p>Email: </p>
            {/* Add more profile information as needed */}
          </div>
        </div>
    </>
  );
};

export default UserProfile;
