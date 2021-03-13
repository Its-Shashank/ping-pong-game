import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomButton = styled.button`
  background-color: #19b5fe;
  color: white;
  border: none;
  /* padding: 15px 0; */
  height: 100%;
  cursor: pointer;
  width: 100%;
  /* margin-top: 200px; */
`;

function Button({ title, onClick }) {
  return <CustomButton onClick={onClick}>{title}</CustomButton>;
}
Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};
export default Button;
