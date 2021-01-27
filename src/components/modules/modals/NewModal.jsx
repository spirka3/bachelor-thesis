import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import EditModal from "./EditModal";
import ImageModal from "../../modals/ImageModal";
import BuilderModal from "./BuilderModal";

const NewModal = ({modules, setModules, showModal, setShowModal}) => {

  const [showModal2, setShowModal2] = useState(false)
  const [moduleType, setModuleType] = useState("")
  const modules_types = ["card", "image"]

  const closeModal = () => setShowModal(false)

  const handleClick = (type) => {
    setModuleType(type)
    setShowModal2(true)
  }

  const renderModuleTypeButton = (type) => {
    return (
      <Button
        className="d-block btn-block" id={type}
        onClick={() => handleClick(type)}
      >
        {type}
      </Button>
    )
  }

  return (
    <>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>"modal.name"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modules_types.map(renderModuleTypeButton)}
        </Modal.Body>
      </Modal>
      {showModal2 &&
        <BuilderModal
          moduleType={moduleType}

          modules={modules}
          setModules={setModules}
          showModal={showModal2}
          setShowModal={setShowModal2}
        />
      }
  </>
  )
}

export default NewModal