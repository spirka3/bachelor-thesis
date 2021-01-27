import React, {useState} from "react";
import Card from "./Card";
import EditModal from "./modals/EditModal";
import Image from "./Image";
import Button from "react-bootstrap/Button";

const BuilderModule = ({module}) => {

  const [showModal, setShowModal] = useState(false)

  const AccurateModule = () => {
    // TODO
    switch(module.type) {
      case "card":
        return (
          <Card id={module.id} img={module.img} title={module.title} text={module.text}/>
        )
      case "image":
        return (
          <Image module={module}/>
        )
      default:
        console.log("module was not rendered")
        console.log(module)
    }
  }


  return (
    <>
      <AccurateModule/>
      <Button onClick={() => setShowModal(true)}>Edit module</Button>
      {showModal &&
        // TODO EditModal
        <EditModal
          module={module}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }
    </>
  )
}

export default BuilderModule