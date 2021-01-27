import React from 'react'
import {Form, Button, Row, Container} from 'react-bootstrap';

export const SearchBar = () => {

  return (
    // TODO display as one line
    <Form inline className={"pr-1 "} style={{display:"flex", flexDirection:"row"}}>
      <Button variant="outline-light" size="sm" className="mr-1">Search</Button>
      <Form.Control type="text" placeholder="Search" size="sm"/>
    </Form>
  )
}
