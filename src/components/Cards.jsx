import React from "react";
import Card from "react-bootstrap/Card";

const Cards = () => {

  const cards = [
    {id: 'a', title: "Title1", text: "Description1", img: "https://picsum.photos/200"},
    {id: 'b', title: "Title2", text: "Description2", img: "https://picsum.photos/200"},
    {id: 'c', title: "Title3", text: "Description3", img: "https://picsum.photos/200"}
  ]

  const renderCard = ({id, title, text, img}) => {
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
 
  return (
    // <ResponsiveReactGridLayout className="layout" layouts={layouts}
    //   breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
    //   cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
    //   isDraggable = {true}
    //   isDroppable = {true}
    //   isResizable = {true}
    //   measureBeforeMount={false}
    //   preventCollision={true}
    //   useCSSTransforms = {true}
    //   resizeHandles = {['se']}
    //   onLayoutChange = {(layout) => console.log(layout)}
    // >
    <>
      {cards.map(renderCard)}
    </>
    // </ResponsiveReactGridLayout>
  )
}

export default Cards;
