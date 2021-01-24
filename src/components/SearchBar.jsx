import React from 'react'
import {Form, Button} from 'react-bootstrap';

export const SearchBar = () => {

  return (
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" size="sm"/>
      <Button variant="outline-light" size="sm">Search</Button>
    </Form>        
  )
}
