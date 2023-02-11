import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const LoggedInUserDetails = () => {
    const history = useNavigate();
  const [loginData, setLoginData] = useState([]);
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  var todayDate = new Date().toISOString().slice(0, 10);
  //  console.log(todayDate);

  const Birthday = () => {
    const getUser = localStorage.getItem("user_login");

    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);
      // console.log(user);

      const userbirthday = loginData.map((el, i) => {
        return el.date === todayDate;
      });

      if (userbirthday) {
        setTimeout(() => {
          console.log("ok");
          handleShow(true)
        }, 3000);
      }
    }
  };

  const userlogout = () =>{
    localStorage.removeItem("user_login")
    history("/");
  }

  useEffect(() => {
    Birthday();
  }, []);
  return (
    <>
      {loginData.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>details page</h1>
          <h1>{loginData[0].name}</h1>
          <Button onClick={userlogout}>Logout</Button>
          {
             loginData[0].date === todayDate ?  
             <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{loginData[0].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Wishing You a very Happy Birthday
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal> : ""
          }
        
        </>
      )}
    </>
  );
};

export default LoggedInUserDetails;
