import {Button, Form, Modal} from "react-bootstrap";
import React from "react";
import {useForm} from "react-hook-form";
import TextGroupForm from "../../forms/TextGroupForm";
import MyModal from "../../modals/MyModal";

const EditModal = ({module, showModal, setShowModal}) => {

  const {register, handleSubmit} = useForm();

  const closeModal = () => setShowModal(false);

  function onSubmit(data) {
    console.log(data)
  }

  const Body = () => {
    return (
      <TextGroupForm
        label="name"
        name="name"
        register={register}
        required={true}
      />
    )
  }

  const Footer = () => {
    return (
      <>
        <Button variant="danger" onClick={handleSubmit(onSubmit)}>Save</Button>
        <Button variant="secondary" onClick={closeModal}>Cancel</Button>
      </>
    )
  }

  return (
    <MyModal
      setShowModal={setShowModal}
      showModal={showModal}
      title={module.id}
      body={<Body/>}
      footer={<Footer/>}
    />
  )
};

export default EditModal;