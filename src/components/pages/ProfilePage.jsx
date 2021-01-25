import React, {useState} from "react";
import {Button, ButtonGroup} from "react-bootstrap";
import MyEditor from "../MyEditor";
import {getUser} from "../../functions";
import UserInfoForm from "../forms/UserInfoFrom";
import UserPassForm from "../forms/UserPassFrom";

const ProfilePage = () => {

  const [formType, setFormType] = useState('name');

  const active = (id) => {
    return formType === id && 'active';
  }

  const user = getUser()

  return (
    <>
      <MyEditor userImage={user.image}/>

      <ButtonGroup onClick={(e) => setFormType(e.target.id)} className="btn-header">
        <Button id="name" className={active("name")}>Change name</Button>
        <Button id="pass" className={active("pass")}>Change pass</Button>
      </ButtonGroup>

      {formType === 'name'
        ? <UserInfoForm data={user.name}/>
        : <UserPassForm/>
      }
    </>
  )
}

export default ProfilePage;
