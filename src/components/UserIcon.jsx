import React, {useState} from 'react'
import Image from 'react-bootstrap/Image';
import UserModal from "./modals/UserModal";

export const UserIcon = () => {

  const [showModal, setShowModal] = useState(false)
  const user = sessionStorage.getItem('user');
  const userImage = user !== null ? "/avatar1.png" : "/login.png";

  const handleClick = () => {
    setShowModal(true);
  }

  return (
    <div>
      <Image src={userImage} rounded onClick={handleClick} className={"p-1"}  style={{width:"40px", height:"40px"}}/>
      { showModal &&
        <UserModal
          showModal={showModal}
          setShowModal={setShowModal}
          userImage={userImage}
        />
      }
    </div>
  )
}
