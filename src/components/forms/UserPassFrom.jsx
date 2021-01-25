import React from "react";
import {useForm} from "react-hook-form";
import {Form, Button} from "react-bootstrap";
import {setUser} from "../../functions";

const UserPassForm = () => {

  const {register, handleSubmit} = useForm();

  const savePass = (data) => {
    setUser({name: data.name, pass: data.pass})
  }

  return (
    <Form>
      {/* PASS */}
      <Form.Group className="form-group">
        <Form.Label>Change pass:</Form.Label>
        <Form.Control
          name="password"
          typr="password"
          placeholder="Enter new password"
          ref={register}
          required
        />
      </Form.Group>
      {/* CONFIRM-PASS */}
      <Form.Group className="form-group">
        <Form.Label>Confirm pass:</Form.Label>
        <Form.Control
          name="password"
          typr="password"
          placeholder="Confirm the password"
          ref={register}
          required
        />
      </Form.Group>

      <Button type="submit" variant="dark" className="btn-block" onClick={handleSubmit(savePass)}>
        Save pass
      </Button>
    </Form>
  )
}

export default UserPassForm;
