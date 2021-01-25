import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Form, Button, ButtonGroup} from "react-bootstrap";
import MyEditor from "../MyEditor";
import {getUser} from "../../functions";
import {setUser} from "../../functions";

const ProfileForm = () => {

  const {register, handleSubmit} = useForm();
  const [formType, setFormType] = useState('name');
  const user = getUser

  const saveName = (data) => {
    setUser({name: data.name, pass: data.pass})
  }

  const savePass = (data) => {
    setUser({name: data.name, pass: data.pass})
  }

  const NameForm = () => {
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
        <Button type="submit" variant="dark" className="btn-block"
                onClick={handleSubmit(saveName)}
        >
          Save name
        </Button>
      </Form>
    )
  }

  const PassForm = () => {
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

        <Button type="submit" variant="dark" className="btn-block"
                onClick={handleSubmit(savePass)}
        >
          Save pass
        </Button>
      </Form>
    )
  }

  const active = (id) => {
    return formType === id && 'active';
  }

  return (
    <>
      <MyEditor userImage={user.image}/>

      <ButtonGroup onClick={(e) => setFormType(e.target.id)} className="btn-header">
        <Button id="name" className={active("name")}>Change name</Button>
        <Button id="pass" className={active("pass")}>Change pass</Button>
      </ButtonGroup>

      {formType === 'name'
        ? <NameForm data={user.name}/>
        : <PassForm/>
      }
    </>
  )
}

export default ProfileForm;
