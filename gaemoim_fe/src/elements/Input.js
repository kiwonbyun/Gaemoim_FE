import React, { Children } from "react";
import styled from "styled-components";

const Input = (props) => {

  const { type, label, placeholder } = props;



  if (type == "line") {
    return (
      <React.Fragment>
        <InputBox {...props} />
      </React.Fragment>
    );
  }

  if (type == "checkbox") {
    return (
      <React.Fragment>
        <CheckBox {...props}/>
        <Label>{label}</Label>
      </React.Fragment>
    );
  }

  return (

    <React.Fragment>
      <Label>{label}</Label>
      <InputBox {...props} />
    </React.Fragment>

  );



}

Input.defaultProps = {
  label: null,
  type: null,
  placeholder: null,
}

const Label = styled.label`
  padding: 2px;
  font-size: 1em;
  font-weight: 600;
`

const InputBox = styled.input`
  box-sizing: border-box;
  padding: 0 10px;

  width: 100%;
  height: 40px;

  border: none;
  border-bottom: 2px solid #E6D5B8;

  placeholder: ${(props) => props.placeholder};

  transition: 0.3s;
  
  &:focus {
    outline: none;
    border-bottom: 2px solid #FF9B26;
  }
  
  &::placeholder {
    font-size:0.85em;
    color: #888;
  }

`

const CheckBox = styled.input`

  &[type='checkbox'], &[type='checkbox']:checked {
    border-radius: 100%;
  }
  &[type='checkbox'] {
    background-color: #fff;
    border: 2px solid #FF9B26;
  }
  &[type='checkbox']:checked {
  background-color: #FF9B26;
}

`

export default Input;