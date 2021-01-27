import React from 'react'

const Image = ({module}) => {
  return (
    <Image id={module.id} src="https://picsum.photos/200" title={module.title} alt={module.alt}/>
  )
}

export default Image