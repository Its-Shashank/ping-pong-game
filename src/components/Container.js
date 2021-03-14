import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 90%;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid black;
  padding: 0 40px;
`;
function Container({ children }) {
  return <CustomContainer>{children}</CustomContainer>;
}
Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
export default Container;
