import React from 'react'
import {Card as C, Image} from 'react-bootstrap'

const UserAvatar = ({userImage, handleClick, style}) => {
  return (
    <Image src={userImage} rounded onClick={handleClick} style={{width:"60px", height:"60px", margin: "6px"}}/>
  )
}

export default UserAvatar