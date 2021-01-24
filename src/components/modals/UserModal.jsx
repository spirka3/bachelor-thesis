import React from "react";
import {Button, Modal} from "react-bootstrap";
import {Image, Form} from 'react-bootstrap';

const UserModal = ({showModal, setShowModal}) => {

  const closeModal = () => setShowModal(false);

  var style = {
    marginTop: "2.4em",
    position: "fix",
    width: "20%",
    left: "80%"
  }

  const handleClick = () => {
    console.log("clg")
  }

  const Avatar = () => {
    return (
      <Image src="../avatar1.png" rounded onClick={handleClick} style={{width:"60px", height:"60px", margin: "6px"}}/>
    )
  }

  const [swt, setSwt] = React.useState(true);
  const Toggle = () => {
    return (
      <Form.Check custom type="switch">
        <Form.Check.Input isInvalid checked={swt} />
        <Form.Check.Label onClick={() => setSwt(!swt)}>
          {`${swt}`}
        </Form.Check.Label>
      </Form.Check>
    )  
  }

  return (
    <Modal show={showModal} onHide={closeModal} animation={false} style={style}>
      <Modal.Header closeButton>
        <Avatar/>
        <Modal.Title>Your Name</Modal.Title>
        <Toggle/>
      </Modal.Header>
      <Modal.Body>
        <Button href="/profile-settings">Profile settings</Button>
        <Button href="/logout">Log out</Button>
      </Modal.Body>
    </Modal>
  )
}

export default UserModal;
