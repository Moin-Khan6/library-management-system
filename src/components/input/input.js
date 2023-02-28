import React from "react";
import { Input } from 'antd';


function InputField(props) {

  const {title} = props;
  let titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <>
      <label for="inputFieldsBtn">{titleUpperCase}</label>
      <Input
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
        {...props}
        class="form-control"
        id="inputFieldsBtn"
        required
      />
    </>
  );
}

export default InputField;
