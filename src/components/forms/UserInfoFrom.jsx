import React from "react";
import {useForm} from "react-hook-form";
import {Form, Button} from "react-bootstrap";
import {setUser} from "../../functions";

const UserInfoForm = () => {

  const {register, handleSubmit} = useForm();

  const saveEmail = (data) => {
    setUser({name: data.name, pass: data.pass})
  }

  return (
    <Form>
      {/* NAME */}
      <Form.Group className="form-group">
        <Form.Label>Change name:</Form.Label>
        <Form.Control
          name="name"
          placeholder="Enter new name"
          ref={register}
          required
        />
      </Form.Group>
      <Button type="submit" variant="dark" className="btn-block" onClick={handleSubmit(saveEmail)}>
        Save name
      </Button>
    </Form>
  )
}

export default UserInfoForm;
