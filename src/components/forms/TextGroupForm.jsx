import React from "react";
import {Form} from "react-bootstrap";
import {upperFirst} from "lodash";

const TextGroupForm = ({label, name, placeholder, register, required, type}) => {

  placeholder = placeholder !== undefined ? placeholder : `Enter ${label}`
  type = placeholder !== undefined ? type : "text"

  return (
    <Form.Group className="form-group">
      <Form.Label>{upperFirst(label)}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        ref={register}
        required={required}
      />
    </Form.Group>
  )
};

export default TextGroupForm;
