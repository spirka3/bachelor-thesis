import Modal from "react-bootstrap/Modal";
import React from "react";

const MyModal = ({showModal, setShowModal, title, body, footer}) => {

  const closeModal = () => setShowModal(false)

  return (
    <Modal show={showModal} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      {footer !== undefined &&
        <Modal.Footer>
          {footer}
        </Modal.Footer>
      }
    </Modal>
  )
}

export default MyModal