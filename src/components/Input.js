import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  height: 30px;
  outline: none;
  border: 1px solid #19b5fe;
  border-radius: 5px;
`;

function InputComponent({ value, onChange }) {
  return <Input value={value} onChange={onChange} />;
}
InputComponent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};
export default InputComponent;
