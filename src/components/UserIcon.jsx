import React, {useState} from 'react'
import Image from 'react-bootstrap/Image';
import UserModal from "./modals/UserModal";

export const UserIcon = () => {

  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true);
  }

  return (
    <div>
      <Image src="./avatar1.png" rounded onClick={handleClick} style={{width:"30px", height:"30px", margin: "6px"}}/>            
      { showModal &&
        <UserModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }
    </div>
  )
}
