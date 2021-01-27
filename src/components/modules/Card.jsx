import React from 'react'
import {Card as C} from 'react-bootstrap'

const Card = ({id, title, text, img}) => {
  return (
    <C style={{ width: '18rem' }} key={id}>
      <C.Body>
        <C.Title>{title}</C.Title>
        <C.Text>{text}</C.Text>
        <C.Img src={img}/>
      </C.Body>
    </C>
  )
}

export default Card