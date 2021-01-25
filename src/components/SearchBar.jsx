import React from 'react'
import {Form, Button} from 'react-bootstrap';

export const SearchBar = () => {

  return (
    <Form inline className={"pr-1"}>
      <Button variant="outline-light" size="sm" className="mr-1">Search</Button>
      <Form.Control type="text" placeholder="Search" size="sm"/>
    </Form>
  )
}
