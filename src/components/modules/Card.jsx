import React from 'react'

const Card = ({id, title, text, img}) => {
    return (
        <Card style={{ width: '18rem' }} key={id}>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Img src={img}/>
            </Card.Body>
        </Card>
    )
}

export default Card